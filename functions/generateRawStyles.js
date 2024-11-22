import fs from "fs/promises"
import path from "path"
import { getFileNames } from "./getFileNames"
import { cleanCss } from "./cleanCss"
import breakpoints from "./breakpoints"
import postcss from "postcss"
import selectorParser from "postcss-selector-parser"
import { compileAndExtractStyles, loadThemes } from "./compileAndExtractStyles.js"

const skipResponsive = ["mask", "typography", "loading", "countdown", "mockup", "skeleton", "swap"]

export async function generateResponsiveVariants(css) {
  let responsiveStyles = ""

  for (const [breakpoint, minWidth] of Object.entries(breakpoints)) {
    const prefixedCss = await postcss([
      (root) => {
        root.walkRules((rule) => {
          if (rule.parent.type === "root") {
            rule.selector = selectorParser((selectors) => {
              selectors.each((selector) => {
                if (selector.first.type === "class") {
                  selector.first.value = `${breakpoint}:${selector.first.value}`
                }
              })
            }).processSync(rule.selector)
          }
        })
      },
    ]).process(css, { from: undefined })

    // Escape the colon in the class name for CSS
    const escapedCss = prefixedCss.css.replace(
      new RegExp(`\\.${breakpoint}:`, "g"),
      `.${breakpoint}\\:`,
    )

    responsiveStyles += `\n@media (min-width: ${minWidth}) {\n${escapedCss}\n}\n\n`
  }

  return css + responsiveStyles
}

async function processFile(file, stylesDir, distDir, defaultTheme, theme, responsive) {
  const styleContent = await fs.readFile(path.join(stylesDir, `${distDir}/${file}.css`), "utf-8")
  let stylesContent = await compileAndExtractStyles(styleContent, defaultTheme, theme)

  if (responsive && !skipResponsive.includes(file)) {
    stylesContent = await generateResponsiveVariants(stylesContent)
  }

  stylesContent = cleanCss(stylesContent)

  await fs.writeFile(path.join(import.meta.dir, distDir, `${distDir}/${file}.css`), stylesContent)
}

export async function generateRawStyles({ srcDir, distDir, responsive = false }) {
  try {
    const { defaultTheme, theme } = await loadThemes()

    const stylesDir = path.join(import.meta.dir, srcDir)
    const files = await getFileNames(stylesDir, ".css", false)

    // Process all files concurrently
    const processPromises = files.map((file) =>
      processFile(file, stylesDir, distDir, defaultTheme, theme, responsive).catch((fileError) => {
        throw new Error(`Error processing file ${file}: ${fileError.message}`)
        // You might want to throw or handle this error differently
      }),
    )

    // Wait for all files to be processed
    await Promise.all(processPromises)
  } catch (error) {
    throw error
  }
}
