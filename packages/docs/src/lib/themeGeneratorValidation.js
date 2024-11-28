// Validation patterns
const themeNamePattern = /^[a-z]{3,20}$/
const borderRadiusPattern = /^(0|0\.125rem|0\.25rem|0\.5rem|0\.75rem|1rem|2rem)$/
const borderWidthPattern = /^[12]px$/

export function validateColor(color) {
  if (typeof color !== "string") {
    console.error("Color must be a string")
    return false
  }

  try {
    const temp = document.createElement("div")
    temp.style.color = color
    return temp.style.color !== ""
  } catch (error) {
    console.error("Invalid color format:", error)
    return false
  }
}

export function validateThemeName(name) {
  if (typeof name !== "string") {
    console.error("Theme name must be a string")
    return false
  }
  if (!themeNamePattern.test(name)) {
    console.error("Theme name does not match the required pattern")
    return false
  }
  return true
}

export function validateRadius(radius) {
  return typeof radius === "string" && borderRadiusPattern.test(radius)
}

export function validateBorderWidth(spacing) {
  return typeof spacing === "string" && borderWidthPattern.test(spacing)
}

export function validateThemeStructure(data) {
  try {
    if (!data || typeof data !== "object") throw new Error("Invalid data structure")

    if (!validateThemeName(data.name)) throw new Error("Invalid theme name")
    if (!["light", "dark"].includes(data["color-scheme"])) throw new Error("Invalid color scheme")

    // Validate all values
    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith("--color-") && !validateColor(value))
        throw new Error(`Invalid color value for ${key}`)
      if (key.startsWith("--radius-") && !validateRadius(value))
        throw new Error(`Invalid radius value for ${key}`)
      if (key.startsWith("--spacing-") && !validateBorderWidth(value))
        throw new Error(`Invalid border width value for ${key}`)
    }

    return data
  } catch (error) {
    console.error(error.message)
    return null
  }
}

export function validateBoolean(value) {
  return value === "true" || value === "false"
}
