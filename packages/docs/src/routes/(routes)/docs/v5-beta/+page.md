---
alert: This page is a draft. Let me know if you found any issues.
title: daisyUI 5 Alpha release notes (WIP)
desc: Everything about the new daisyUI 5 release
---

> :INFO:
>
> Also check out [the changelog page](/docs/changelog/) for a detailed list changes in each component.

<details class="collapse collapse-arrow bg-base-100 border border-base-300 mt-6 mb-10">
<summary class="collapse-title text-lg">Table of Contents</summary>
<div class="collapse-content text-sm">

0. [Install](#install)
1. [Core Improvement](#1-core-improvement)
2. [Build and integration improvements](#2-build-and-integration-improvements)
3. [Design System Improvements](#3-design-system-improvements)
4. [Themes and styling](#4-themes-and-styling)
5. [New components](#5-new-components)
6. [Major component improvements](#6-major-component-improvements)
7. [Component design improvements](#7-component-design-improvements)
8. [Component size scale improvements](#8-component-size-scale-improvements)
9. [Detailed Changelog](#9-detailed-changelog)
10. [Breaking changes in class names](#10-breaking-changes-in-class-names)
11. [Breaking changes in design system](#11-breaking-changes-in-design-system)
12. [Breaking changes in config](#12-breaking-changes-in-config)
13. [Breaking changes in themes](#13-breaking-changes-in-themes)
14. [Bug fixes](#14-bug-fixes)
15. [What to expect in the final release](#15-what-to-expect-in-the-final-release)

</div>
</details>

<!--

Welcome! 🎉

daisyUI, the essential companion to Tailwind CSS is now being used in 330,000 open source projects, with 18 million npm installs (300 thousand weekly installs). daisyUI is growing faster than before and today it's helping countless people creating better and faster websites.  

💚 daisyUI became possible thanks to your incredible contributions, helpful feedback, and amazing support. Thank you!

Since the release of daisyUI 4 in 2023, a lot of feedback, feature requests, and bug reports have been received. Big efforts went into preparing daisyUI for this major release, using the latest web standards and new CSS/HTML features, as well as all the amazing new Tailwind CSS 4 features.

Here's daisyUI 5 (Alpha) with a lot of new features, improvements, and bug fixes. It's a huge update, and I added TLDR for each section to make it easier to read.

Let's begin!

-->

## Install

🧪 This is an Alpha release. Use it for testing purposes only. Stable version will be available later.

1. First Install [Tailwind CSS 4 beta](https://tailwindcss.com/docs/v4-beta)
2. Install daisyUI 5 Alpha

  ```bash:Terminal
  npm i -D daisyui@alpha
  ```
3. Add daisyUI to your CSS file
  
  ```css:app.css
  @import "tailwindcss";
  @plugin "daisyui";
  ```

---


## 1. Core Improvement

> :TLDR:
>
> TLDR – daisyUI 5 is compatible with Tailwind CSS 4, has zero dependencies, a smaller package size, smaller CSS size, and is more customizable. CSS variables are now more readable and more flexible.  
> [:FF: Skip to the next section](#2-build-and-integration-improvements)

### Tailwind CSS 4 compatibility

daisyUI 5 works with Tailwind CSS 4. See [Tailwind CSS upgrade guide](https://tailwindcss.com/)

With Tailwind CSS 4, you can now import daisyUI as a plugin in the CSS file.

<div class="before-after">

```js:Before
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require('daisyui');
  ],
}
```
```css:After
/* app.css */
@import "tailwindcss";
@plugin "daisyui";
```
</div>

### Zero dependencies

daisyUI 5 has no dependencies. Let's clean up your node_modules!

<div class="before-after">

```js:Before
Dependencies - 1123.72 kB total
  ├╴ culori - 1060 kB
  ├╴ picocolors - 6.22 kB
  ├╴ postcss-js - 12.2 kB
  ╰╴ css-selector-tokenizer - 45.3 kB
```
```js:After
No dependencies - 0 kB

```
</div>

### Smaller size

With daisyUI as a Tailwind CSS plugin, only the needed styles are included in the final CSS file. Other than that we have made a lot of optimizations to make both package size and CSS file size smaller.

daisyUI 5 NPM package is 61% smaller in size.

<dl class="before-after">
  <dt>Before</dt>
  <dd>
    <div>
      Install size – 4.7 MB
      <br/>
      <progress class="progress progress-error" value="4.7" max="5.1"></progress>
    </div>
  </dd>
  <dt>After</dt>
  <dd>
    <div>
      Install size – 1.8 MB
      <br/>
      <progress class="progress progress-success" value="1.8" max="5.1"></progress>
    </div>
  </dd>
</dl>

daisyUI 5 CDN file, including all possible class names, is 75% smaller in size

<dl class="before-after">
  <dt>Before</dt>
  <dd>
    <div>
      full.css – 137 kB compressed
      <br/>
      <progress class="progress progress-error" value="137" max="145"></progress>
    </div>
  </dd>
  <dt>After</dt>
  <dd>
    <div>
      daisyui.css – 34 kB compressed
      <br/>
      <progress class="progress progress-success" value="34" max="145"></progress>
    </div>
  </dd>
</dl>

It is now safe and efficient to use the CDN file in production. The compressed CSS file, is now 34 kB only thanks to native CSS nesting and huge amount of optimizations in daisyUI 5. This is the smallest 

### Improved color variables

With Tailwind CSS 3 and daisyUI 4, we had to extract the color values of each color into CSS variables, and pass it to CSS alongside a special `<alpha-value>` variable so Tailwind could generate opacity variables for each utility color.

Tailwind CSS 4 doesn't have this limitation because it uses CSS `color-mix()` to control the opacity.

With daisyUI 5 we can finally put the whole color inside CSS variables. All color formats are supported, no transformation is needed no JS object is needed.

We also updated the variable names to be more readable in the output CSS:

<div class="before-after">

```css:Before
/* hard to read variable names, hard to customize values */
{
--b1: 100% 0 0;
--b2: 96.1151% 0 0;
--b3: 92.4169% .00108 197.137559;
--bc: 27.8078% .029596 256.847952;
--p: 49.12% .3096 275.75;
--pc: 89.824% .06192 275.75;
--s: 69.71% .329 342.55;
--sc: 98.71% .0106 342.55;
--a: 76.76% .184 183.61;
--ac: 15.352% .0368 183.61;
--n: 32.1785% .02476 255.701624;
--nc: 89.4994% .011585 252.096176;
--in: 72.06% .191 231.6;
--inc: 0% 0 0;
--su: 64.8% .15 160;
--suc: 0% 0 0;
--wa: 84.71% .199 83.87;
--wac: 0% 0 0;
--er: 71.76% .221 22.18;
--erc: 0% 0 0;
}
```
```css:After
/* standard color format, easy to customize in browser */
{
--color-base-100: oklch(100% 0 0);
--color-base-200: oklch(96.115% 0 0);
--color-base-300: oklch(92.416% 0.001 197.137);
--color-base-content: oklch(27.807% 0.029 256.847);
--color-primary: oklch(49.12% 0.309 275.75);
--color-primary-content: oklch(89.824% 0.061 275.75);
--color-secondary: oklch(69.71% 0.329 342.55);
--color-secondary-content: oklch(98.71% 0.01 342.55);
--color-accent: oklch(76.76% 0.184 183.61);
--color-accent-content: oklch(15.352% 0.036 183.61);
--color-neutral: oklch(20% 0.024 255.701);
--color-neutral-content: oklch(89.499% 0.011 252.096);
--color-info: oklch(72.06% 0.191 231.6);
--color-info-content: oklch(0% 0 0);
--color-success: oklch(64.8% 0.15 160);
--color-success-content: oklch(0% 0 0);
--color-warning: oklch(84.71% 0.199 83.87);
--color-warning-content: oklch(0% 0 0);
--color-error: oklch(71.76% 0.221 22.18);
--color-error-content: oklch(0% 0 0);
}
```
</div>

## 2. Build and integration improvements

> :TLDR:
>
> TLDR – Import only the parts you need.  
> Micro CSS files are now available for no-build projects.  
> Native CSS nesting reduces CSS size.  
> It's ESM compatible and has dependency-free class name prefixing.  
> [:FF: Skip to the next section](#3-design-system-improvements)

### Native CSS nesting

CSS nesting is now supported on all browsers. daisyUI 5 uses CSS nesting which prevents duplication of CSS rules and results smaller CSS size in your browser!

### ESM compatibility

daisyUI 5 is now ESM (ECMAScript Module) compatible. Which means you can import and use specific parts of the library in JS if you need to.

### Dependency-free class name prefixing

daisyUI 5 can now prefix class names without a dependency.

### Micro CSS files for No-Build projects

For server-side rendered projects (Rails, Django, PHP, etc) or projects that don't have a JS build step (HTMX, Alpine.js, WordPress, etc), it's now possible to use specific parts of daisyUI without including the entire library or even without Tailwind CSS.

For example if you only want to use daisyUI toggle component, include a tiny CSS file that only contains the styles for the toggle component:

<div class="before-after">

```:Before
Not possible
```
```:After
https://cdn.jsdelivr.net/npm/daisyui@5.0.0-alpha.52/components/toggle.css
```
</div>

All components, all themes, and basically every single part of daisyUI library [is now available as compressed. minified CSS files on CDN](https://cdn.jsdelivr.net/npm/daisyui@5.0.0-alpha.52/chunks.css).

Also, with the 75% smaller daisyui.css (formerly full.css) CDN file, it is now safe and efficient to use the CDN file in production. The compressed CSS file, is now 34 kB only thanks to native CSS nesting and huge amount of optimizations in daisyUI 5.

### Include and Exclude parts of the library

Now for the first time, it's possible to include/exclude specific parts of daisyUI library. For example if you only want to use the "Toggle" component, you can include only the "Toggle" component and exclude everything else!

<div class="before-after">

```:Before
Not possible
```
```css:After
@plugin "daisyui" {
  include: toggle;
}
```
</div>
Or if you want to exclude a specific part of the library, you can do that too!
<div class="before-after">

```:Before
Not possible
```
```css:After
@plugin "daisyui" {
  exclude: scrollbar;
}
```
</div>

## 3. Design System Improvements

> :TLDR:
>
> TLDR – New "Effect" CSS variables.  
> Size improvements + new `xl` size modifier.  
> New component style modifiers: `*-soft` and `*-dash`.  
> Color format flexibility.  
> [:FF: Skip to the next section](#4-themes-and-styling)

### New "Effect" CSS variables

daisyUI 5 introduces a new set of effects that can be enabled or disabled globally or per theme. These effects change the look and feel of relevant components, like buttons, checkbox, toggle, etc.

Currently, the following effects are available:
- `--depth`: adds a clean, subtle depth effect to the components, making them look more visually appealing
- `--noise`: adds a slight noise effect to the components, giving them a more textured look

These effects can be enabled or disabled using a CSS variable. Check out the new [Theme Generator](/theme-generator/) page to see how it works.

### New "X-Large" size
All components that previously had `xs`, `sm`, `md`, and `lg` size modifiers now also support a new `xl` size modifier. This gives you more control over the size of components and allows you to create more flexible and responsive designs.

### Size scale improvements

With the addition of the new `xl` size modifier, the size scale of components has been adjusted to make it consistent. The new size scale is more harmonious and visually appealing.

In daisyUI 4, the size difference between sizes was not following a consistent scale.  
The new default size scale is consistent and more visually appealing ...and it's customizable!

| Button height scale | Before                                        | After                                           |
|---------------------|-----------------------------------------------|-------------------------------------------------|
| `xs`                | 6  × 4 = 24px                                 | <span class="text-success">6</span>  × 4 = 24px |
| `sm`                | 8  × 4 = 32px                                 | <span class="text-success">8</span>  × 4 = 32px |
| `md`                | <span class="text-error">12</span> × 4 = 48px | <span class="text-success">10</span> × 4 = 40px |
| `lg`                | <span class="text-error">16</span> × 4 = 64px | <span class="text-success">12</span> × 4 = 48px |
| `xl`                | -                                             | <span class="text-success">14</span> × 4 = 56px |

| Checkbox height scale | Before                                       | After                                          |
|-----------------------|----------------------------------------------|------------------------------------------------|
| `xs`                  | 4  × 4 = 16px                                | <span class="text-success">4</span> × 4 = 16px |
| `sm`                  | 5  × 4 = 20px                                | <span class="text-success">5</span> × 4 = 20px |
| `md`                  | 6  × 4 = 24px                                | <span class="text-success">6</span> × 4 = 24px |
| `lg`                  | <span class="text-error">8</span> × 4 = 32px | <span class="text-success">7</span> × 4 = 28px |
| `xl`                  | -                                            | <span class="text-success">8</span> × 4 = 32px |

### Size scale customization

Component size scales are now customizable. Previously, customizing the size of components required a lot of manual work.  
Now everything is tokenized with CSS variables, You can define the size scale of the components globally or per theme, making them shorter or taller, based on your design needs.

- `--size-field` variable is used to define the base size of fields like input, button, tab, etc.
- `--size-selector` variable is used to define the base size of selectors like checkbox, radio, toggle, badge, etc.

See how it works in the new [Theme Generator](/theme-generator/) page.

### Border size customization

Border size of buttons, inputs, tab, et are now customizable globally or per theme.

- `--border` variable is used to define the border size of components like button, input, tab, etc.

See how it works in the new [Theme Generator](/theme-generator/) page.

### New component styles: `soft`, `dash`

Components like `button`, `badge`, `alert` now have `soft` and `dash` styles.  
`soft` style makes the component look softer and `dash` style adds a dashed border to the component.

### All modifier classes are now responsive

daisyUI 5 makes all modifiers responsive by default. This means you can use responsive modifiers like `md:`, `lg:`, etc. with all component modifier classes, not just a selected few.

### Color format flexibility

daisyUI 5 supports all color formats and doesn't convert your colors to a specific format.

Before Tailwind CSS 4, color values of utility classes had to be generated at build time so the only way to have CSS variables for colors and being able to use Tailwind CSS opacity modifiers was to use a specific color format and pass it tailwind to generate the opacity variables.  
Tailwind CSS 4 now uses CSS variables for colors and `color-mix()` to control the opacity. This means we can use any color format we want and no transformation is needed.  
daisyUI built-in themes still use OKLCH color format and I would recommend using OKLCH for custom themes too, but you can use any color format you want and neither daisyUI nor Tailwind CSS will convert it to another format at build time.

## 4. Themes and styling

Themes and colors are what makes your website unique. We've made significant improvements to the themes and colors in daisyUI 5, including new themes, improved existing themes, and a new Theme Generator to help you create your own custom themes.

> :TLDR:
>
> TLDR – New themes + improved existing themes.  
> New Theme Generator to create custom themes.  
> [:FF: Skip to the next section](#5-new-components)


### New themes

daisyUI 5 includes 3 new themes:

- `cappuccino` – Warm, cozy, light theme featuring brown and beige
- `abyss` – Deep dark green, teal and phosphorus color palette
- `silk` – Bright, clean and bold theme with fluorescent text colors

### Existing themes improvements

Most daisyUI themes have been adjusted to look better and consistent. color contrast and accessibility got even better and the colors are more harmonious. These changes make the color more visually appealing and easier to read.

### All-new Theme Generator

Check out the new [Theme Generator](/theme-generator/) page to create your own custom theme. Create, customize or extend themes, or generate stunning new themes using the new daisyUI color palette generator algorithm.

## 5. New components

daisyUI 5 introduces new components to help you build websites faster.

> :TLDR:
>
> TLDR – New components: `List`, `Status`, `Fieldset`, `Label`, `Filter`, `Calendar`, `Validator`, `Dock`.  
> [:FF: Skip to the next section](#6-major-component-improvements)

### List

List is is useful for vertical layout to display information in rows. Imagine a list of products, list of people, list of articles, etc.

See [List component docs](/components/list/)

### Status

Status is a really small icon to visually show the current status of an element, like online, offline, error, etc.

Available in 5 sizes: `xs`, `sm`, `md`, `lg`, and `xl`.

See [Status component docs](/components/status/)

### Fieldset

Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and fieldset-label as a description.

See [Fieldset component docs](/components/fieldset/)

### Label

Label provides a name or title for an input field. Label can be placed before or after the field. floating-label is a label that floats above the field when the field is focused.

See [Label component docs](/components/label/)

### Filter

Filter is a group of radio buttons. Choosing one of the options will hide the others and shows a reset button next to the chosen option.

See [Filter component docs](/components/filter/)

### Calendar

daisyUI 5 provides all the necessary styles for 3 popular calendar/datepicker libraries: Cally, Pikaday, and React Day Picker.  
This means you can use any of these libraries the style will be compatible with daisyUI colors and styles.

- Cally is a web component calendar datepicker and it works everywhere
- Pikaday is a simple and easy-to-use JS datepicker and it works everywhere
- React Day Picker is a flexible date picker for React

See [Calendar component docs](/components/calendar/)

### Validator

Validator class changes the color of form elements to `error` or `success` based on input's validation rules. It can also show a hint text below the input if it's invalid.

See [Validator component docs](/components/validator/)

### Dock

A replacement for "bottom navigation" component. Dock is a horizontal navigation bar that sticks to the bottom of the screen, new design, new look and more customizable.

Available in 5 sizes: `xs`, `sm`, `md`, `lg`, and `xl`.

See [Dock component docs](/components/dock/)

## 6. Major component improvements

These components had significant improvements in daisyUI 5, including new modifiers, new features, and better customization options.

> :TLDR:
>
> TLDR – Some components got significant improvements, including new modifiers, new features, and better customization options.  
> Some components have improved visual appeal.  
> [:FF: Skip to the next section](#7-component-design-improvements)

- **[Button](/components/button/)** – New hover behavior for ghost/outline styles, new soft/dash styles
- **[Dropdown](/components/dropdown/)** – New HTML popover API support, CSS anchor positioning, new dropdown-center modifier
- **[Modal](/components/modal/)** – New positioning options (modal-start, modal-end, modal-top)
- **[Badge](/components/badge/)** – New soft/dash styles
- **[Card](/components/card/)** – New radio card functionality, new dash variant
- **[Alert](/components/alert/)** – New soft/dash styles, new vertical/horizontal layout options
- **[Tab](/components/tab/)** – New tabs-border style, new top/bottom positioning
- **[Tooltip](/components/tooltip/)** – New tooltip-content class
- **[Toggle](/components/toggle/)** – New custom icons support
- **[Join](/components/join/)** – Improved structure compatibility
- **[Stack](/components/stack/)** – New CSS grid layout, new directional options
- **[Footer](/components/footer/)** – New horizontal/vertical layout options
- **[Drawer](/components/drawer/)** – Improved accessibility
- **[Diff](/components/diff/)** – Better iOS Safari support, improved Firefox performance

## 7. Component design improvements

> :TLDR:
>
> TLDR – Several components received visual enhancements for improved aesthetics.  
> [:FF: Skip to the next section](#8-component-size-scale-improvements)

These components have been improved to be more visually appealing:

- **[Chat bubble](/components/chat/)**
- **[Checkbox](/components/checkbox/)**
- **[Radio](/components/radio/)**
- **[Toggle](/components/toggle/)**
- **[Range](/components/range/)**
- **[Menu](/components/menu/)**
- **[File Input](/components/file-input/)**
- **[Select](/components/select/)**
- **[Input field](/components/input/)**
- **[Label](/components/label/)**
- **[Rating](/components/rating/)**
- **[Radial Progress](/components/radial-progress/)**
- **[Mockups](/components/mockup-browser/)**

## 8. Component size scale improvements

> :TLDR:
>
> TLDR – Size scale improvements for better consistency and flexibility.  
> [:FF: Skip to the next section](#9-detailed-changelog)

These components now support the new `xl` size modifier:
- **[Button](/components/button/)**
- **[Card](/components/card/)**
- **[Kbd](/components/kbd/)**
- **[Table](/components/table/)**
- **[Menu](/components/menu/)**
- **[Tab](/components/tab/)**
- **[Loading](/components/loading/)**
- **[Checkbox](/components/checkbox/)**
- **[File Input](/components/file-input/)**
- **[Radio](/components/radio/)**
- **[Range](/components/range/)**
- **[Rating](/components/rating/)**
- **[Select](/components/select/)**
- **[Input field](/components/input/)**
- **[Textarea](/components/textarea/)**
- **[Toggle](/components/toggle/)**

Size scale of these components has been improved to be more consistent:
- **[Button](/components/button/)**
- **[Badge](/components/badge/)**
- **[Kbd](/components/kbd/)**
- **[Table](/components/table/)**
- **[Menu](/components/menu/)**
- **[Tab](/components/tab/)**
- **[Loading](/components/loading/)**

## 9. Detailed Changelog

> :TLDR:
>
> TLDR - It's a long list of changes. Most of them won't affect you, so I've summarized the most important ones here and you can read the detailed changelog for each component [in the changelog page](/docs/changelog/).  
> [:FF: Skip to the next section](#10-breaking-changes-in-class-names)

Summary of changes:
- Many components received style updates (new variants, improved aesthetics).  
- Size scales were adjusted and standardized across components.  
- Accessibility improvements implemented in multiple areas.  
- Bug fixes addressed across the library.  
- New features and expanded customization options added to various components.  
- Several components received significant structural refactoring for improved compatibility and maintainability.  
- Responsive design capabilities enhanced.  
- Improved support for various browsers and devices.  
- Print-friendliness improved for several components.  

[Read the detailed changelog for each component](/docs/changelog/)  


## 10. Breaking changes in class names

> :TLDR:
>
> TLDR - Some class names were renamed, some unused ones were removed.  
> [:FF: Skip to the next section](#11-breaking-changes-in-design-system)

- Add `md:footer-horizontal` to `footer` component to make it horizontal on medium screens.
- Instead of `btn-group` use [`join`](/components/join/) (`btn-group` was deprecated in 2023, now removed)
- Instead of `input-group` use [`join`](/components/join/) (`input-group` was deprecated in 2023, now removed)
- Rename `card-compact` to `card-sm`
- Rename `disabled` class of `menu` items to `menu-disabled`.
- Rename `active` class of `menu` items to `menu-active`.
- Rename `focus` class of `menu` items to `menu-focus`.
- Delete `form-control` class. Use the [new `fieldset` component](/components/fieldset/) instead.
- Instead of previous `label` syntax, use the [new `label` syntax](/components/label/).
- Rename `btm-nav` to `dock`.
- Rename `btm-nav-label` to `dock-label`.
- Rename `btm-nav-xs` to `dock-xs`.
- Rename `btm-nav-sm` to `dock-sm`.
- Rename `btm-nav-md` to `dock-md`.
- Rename `btm-nav-lg` to `dock-lg`.
- Instead of `artboard` class, use Tailwind CSS width/height utilities.
- Delete `artboard-demo`, `artboard-horizontal`, `phone-*` classes. Use Tailwind CSS width and height utilities instead.
- Rename `online` class of `avatar` to `avatar-online`.
- Rename `offline` class of `avatar` to `avatar-offline`.
- Rename `placeholder` class of `avatar` to `avatar-placeholder`.
- Delete `mask-parallelogram`. No longer exists.
- Delete `mask-parallelogram-2`. No longer exists.
- Delete `mask-parallelogram-3`. No longer exists.
- Delete `mask-parallelogram-4`. No longer exists.
- Delete width/height of items inside the `stack`, use width/height for the `stack` itself.

[Read the detailed changelog for each component](/docs/changelog/)  

## 11. Breaking changes in design system

> :TLDR:
>
> Default sizes for some UI elements have been adjusted for improved consistency. They are also customizable now.  
> [:FF: Skip to the next section](#12-breaking-changes-in-config)

- `btn`, `input`, `select` now have a smaller height by default [see size scale improvements](#size-scale-improvements)
- `checkbox`, `radio`, `toggle`, `range`, `rating` now have a smaller height by default [see size scale improvements](#size-scale-improvements)

You can customize the default size scale using the new `--size-field` and `--size-selector` CSS variables in your theme.  
Check out the new [Theme Generator](/theme-generator/) page to see it in action.

[Read the detailed changelog for each component](/docs/changelog/)  

## 12. Breaking changes in config

> :TLDR:
>
> TLDR – Use the new config format in the CSS file. No need for `tailwind.config.js` anymore.  
> The new config format is easier to use, it's more flexible, and it's more powerful.  
> [:FF: Skip to the next section](#13-breaking-changes-in-themes)

- Tailwind CSS 4 allows config directly from the CSS file, so instead of `tailwind.config.js` you need to put the daisyUI config in the CSS file. [See the new config format](/docs/config/).
- `themes` config is a comma separated list of theme names. Read more about [daisyUI config](/docs/config/) and [daisyUI themes](/docs/themes/).
- `darkTheme` config was removed. Instead you can use `--prefersdark` flag directly in the `themes` list.
- `themeRoot` config was renamed to `root`.
- `styled: false` config was removed in favor of providing micro CSS files and the ability to include/exclude parts of the library. Disabling themes will remove all colors, but component are no longer distributed into two chunk of unstyled styled. You can now include/exclude each component individually.
- `base: false` config was removed in favor of include/exclude config where you can include/exclude each component individually.
- `utils: false` config was removed in favor of include/exclude config where you can include/exclude each component individually.

Read more about [daisyUI config](/docs/config/).

## 13. Breaking changes in themes

> :TLDR:
>
> TLDR – Automatic `*-content` color calculation is removed. Theme variable names have changed for better consistency and readability.  Previous themes are available for easy migration.  
> [:FF: Skip to the next section](#14-bug-fixes)

Automatic `*-content` color calculation based on background color was removed. Now that Tailwind CSS supports CSS variables for colors, we no longer process and convert color values at build time. You can use any color format you want and neither daisyUI nor Tailwind CSS will convert it to another format at build time.

Most themes have been adjusted to look better and consistent. color contrast and accessibility got even better and the colors are more harmonious. These changes make the color more visually appealing and easier to read.  
If you prefer using the previous colors, I [prepared a repo, including all daisyUI 4 theme colors](https://github.com/daisyui/v4-themes-for-v5/) easy to copy/paste in daisyUI 5.

All color variable names have been changed to be aligned with new Tailwind CSS 4 syntax. And to be more readable and easier to customize [See the new color format](#improved-color-variables)

| Before                             | After                       |
|------------------------------------|-----------------------------|
| `--p`                              | `--color-primary`           |
| `--pc`                             | `--color-primary-content`   |
| `--s`                              | `--color-secondary`         |
| `--sc`                             | `--color-secondary-content` |
| `--a`                              | `--color-accent`            |
| `--ac`                             | `--color-accent-content`    |
| `--n`                              | `--color-neutral`           |
| `--nc`                             | `--color-neutral-content`   |
| `--b1`                             | `--color-base-100`          |
| `--b2`                             | `--color-base-200`          |
| `--b3`                             | `--color-base-300`          |
| `--bc`                             | `--color-base-content`      |
| `--in`                             | `--color-info`              |
| `--inc`                            | `--color-info-content`      |
| `--su`                             | `--color-success`           |
| `--suc`                            | `--color-success-content`   |
| `--wa`                             | `--color-warning`           |
| `--wac`                            | `--color-warning-content`   |
| `--er`                             | `--color-error`             |
| `--erc`                            | `--color-error-content`     |
| `--rounded-box`                    | `--radius-box`              |
| `--rounded-btn` and `--tab-radius` | `--radius-field`            |
| `--rounded-badge`                  | `--radius-selector`         |
| `--border-btn` and `--tab-border`  | `--border`                  |

- `--animation-btn` was removed (no longer needed)
- `--animation-input` was removed (no longer needed)
- `--btn-focus-scale` was removed (no longer needed)

## 14. Bug fixes

> :TLDR:
>
> TLDR – More than 95% of all the open issues from daisyUI 4 have been fixed in this release.  
> [:FF: Skip to the next section](#15-what-to-expect-in-the-final-release)

Some of these bugs were fixed automatically by the new changes in changes in the core library, design system, themes, and components. Some of them became possible with the new capabilities of Tailwind CSS 4.  

And some of these bugs were related to a specific structure / style / behavior of components and changing them in a patch release would have caused breaking changes for all existing projects. We had to wait for the major release to apply these changes.  

If you've been waiting for a specific bug fix, here are the bugs that have been fixed in this release. Let me know if I miss any bug.

- [#3332: bug: v5 Label with select has non-working drop down arrow](https://github.com/saadeghi/daisyui/issues/3332)
- [#3328: bug: DaisyUI 5: Even though the container element has justify-center, setting width to an `<input>` element doesn't shrink the `<input>` element v5](https://github.com/saadeghi/daisyui/issues/3328)
- [#3325: bug: TS type declaration missing for themes/object v5](https://github.com/saadeghi/daisyui/issues/3325)
- [#3322: bug: V5 Dropdown mispositioning using popover API and anchorpositioning v5](https://github.com/saadeghi/daisyui/issues/3322)
- [#3320: bug: V5-alpha48 toggle misplaced in Firefox v5](https://github.com/saadeghi/daisyui/issues/3320)
- [#3318: bug: Timeline Spacing v5](https://github.com/saadeghi/daisyui/issues/3318)
- [#3316: bug: V5 glass does not work v5](https://github.com/saadeghi/daisyui/issues/3316)
- [#3315: bug: Tab (legacy) visual pop when radio inputs are unchecked v5](https://github.com/saadeghi/daisyui/issues/3315)
- [#3313: docs: DaisyUI v5 default theme v5](https://github.com/saadeghi/daisyui/issues/3313)
- [#3312: docs: DaisyUI V5 themes color extraction v5](https://github.com/saadeghi/daisyui/issues/3312)
- [#3294: bug: (v5) dropdown displayed in viewport top left corner in Firefox v5](https://github.com/saadeghi/daisyui/issues/3294)
- [#3281: bug: (v5): Select: does not wrap content with h-fit v5](https://github.com/saadeghi/daisyui/issues/3281)
- [#3280: bug: (v5) Button: btn-ghost does not allow combine with text color v5](https://github.com/saadeghi/daisyui/issues/3280)
- [#3276: bug: dropdown-hover do not work on laptops with a touchscreen v5](https://github.com/saadeghi/daisyui/issues/3276)
- [#3272: bug: themes that change the default font conflicts with the ones that does not. v5](https://github.com/saadeghi/daisyui/issues/3272)
- [#3250: bug: tailwindcss neutral color compatibility with theme() v5](https://github.com/saadeghi/daisyui/issues/3250)
- [#3245: bug: DaisyUI 5 doesn't override @tailwindcss/typography style of `<code>` element, leading to unreadable text. v5](https://github.com/saadeghi/daisyui/issues/3245)
- [#3242: bug: DaisyUI 5: select is not wide enough, resulting in the select arrow overlapping with content v5](https://github.com/saadeghi/daisyui/issues/3242)
- [#3232: bug: Some elements depend on using backgrounds, which break for print media](https://github.com/saadeghi/daisyui/issues/3232)
- [#3231: bug: Diff component not working in Astro, Nextjs v5](https://github.com/saadeghi/daisyui/issues/3231)
- [#3224: bug: mb-* override by timeline-compact when used with timeline-start but not timeline-end v5](https://github.com/saadeghi/daisyui/issues/3224)
- [#3222: bug: invisible toast area blocks buttons v5](https://github.com/saadeghi/daisyui/issues/3222)
- [#3218: bug: 'join-vertical md:join-horizontal' failed to set horizontal style border on nest join-item v5](https://github.com/saadeghi/daisyui/issues/3218)
- [#3216: bug: btn btn-link btn-disabled looks like button but not link v5](https://github.com/saadeghi/daisyui/issues/3216)
- [#3215: bug: Vertical scroll not functional when drawer is open on screens under 1024px width v5](https://github.com/saadeghi/daisyui/issues/3215)
- [#3203: bug: Browser mockup component's search icon is broken in Safari v5](https://github.com/saadeghi/daisyui/issues/3203)
- [#3202: bug: Non-animated buttons behave strangely when active in Firefox v5](https://github.com/saadeghi/daisyui/issues/3202)
- [#3188: bug: menu item modifier not works with selector v5](https://github.com/saadeghi/daisyui/issues/3188)
- [#3176: bug: range in rtl mode show wrong bar v5](https://github.com/saadeghi/daisyui/issues/3176)
- [#3170: bug: Invalid CSS generated when child of an element with the "btm-nav" class has the "active" class that uses a media query v5](https://github.com/saadeghi/daisyui/issues/3170)
- [#3169: docs: position Drawer component seem not working v5](https://github.com/saadeghi/daisyui/issues/3169)
- [#3166: bug: scrollbar-color causing unnecessary repaints v5](https://github.com/saadeghi/daisyui/issues/3166)
- [#3160: docs: Navigation does not work due to call to navigator.sendBeacon() v5](https://github.com/saadeghi/daisyui/issues/3160)
- [#3157: bug: Chat bubble visibly split with white line v5](https://github.com/saadeghi/daisyui/issues/3157)
- [#3155: docs: Modal that closes when clicked outside v5](https://github.com/saadeghi/daisyui/issues/3155)
- [#3153: Weird behaviour when buttons include HTML elements (seen when adding the v3/4 loading spinner spans) v5](https://github.com/saadeghi/daisyui/issues/3153)
- [#3148: bug: Diff component not working on Firefox. v5](https://github.com/saadeghi/daisyui/issues/3148)
- [#3141: bug: dropdown breaks in tables with overflow applied v5](https://github.com/saadeghi/daisyui/issues/3141)
- [#3128: bug: collapse with arrow or plus crashes edge v5](https://github.com/saadeghi/daisyui/issues/3128)
- [#3117: bug: Media breakpoint doesn't seem to apply with menu-horizontal v5](https://github.com/saadeghi/daisyui/issues/3117)
- [#3116: bug: Nesting Collapse in Dropdown menu results in unintended Dropdown behaviour v5](https://github.com/saadeghi/daisyui/issues/3116)
- [#3078: bug: tabpanel on the *real* device does not fill full width. v5](https://github.com/saadeghi/daisyui/issues/3078)
- [#3071: bug: White area overlays part of the drawer's content v5](https://github.com/saadeghi/daisyui/issues/3071)
- [#3060: bug: stepper (active step) z-index is higher then of the drawer v5](https://github.com/saadeghi/daisyui/issues/3060)
- [#3053: bug: Lagging on the opening animation of collapse components only on Firefox v5](https://github.com/saadeghi/daisyui/issues/3053)
- [#3040: bug: Modal Dialog Adds A None Existent Scrollbar Spacing To Backdrop v5](https://github.com/saadeghi/daisyui/issues/3040)
- [#3027: bug: tabs boxed with radio forces unrounded bottom corners v5](https://github.com/saadeghi/daisyui/issues/3027)
- [#2988: bug: Tabs using grid-span: 9999 v5](https://github.com/saadeghi/daisyui/issues/2988)
- [#2987: bug: The theme color is incorrect in yarn serve mode after Docusaurus is built v5](https://github.com/saadeghi/daisyui/issues/2987)
- [#2979: bug: menu-horizontal submenus styled differently when using menu-dropdown vs details v5](https://github.com/saadeghi/daisyui/issues/2979)
- [#2975: bug: btn doesn't accept --fallback tokens as first option. v5](https://github.com/saadeghi/daisyui/issues/2975)
- [#2965: bug: The .collapse-content and .collapse-title extend beyond the width of the .collapse elementi itself v5](https://github.com/saadeghi/daisyui/issues/2965)
- [#2950: docs: Inaccessible components / wrong advice on docs. v5](https://github.com/saadeghi/daisyui/issues/2950)
- [#2867: bug: Sidebar-drawer component overlay does not overlay table pinned rows v5](https://github.com/saadeghi/daisyui/issues/2867)
- [#2865: bug: Disabled inputs and buttons have inconsistent styling v5](https://github.com/saadeghi/daisyui/issues/2865)
- [#2862: bug: long string in menu does not wrap in safari (with temp solution) v5](https://github.com/saadeghi/daisyui/issues/2862)
- [#2850: bug: Broken transition on collapse when using Firefox (macOS) v5](https://github.com/saadeghi/daisyui/issues/2850)
- [#2833: bug: diff adjusting doesn't work on Firefox for Android v5](https://github.com/saadeghi/daisyui/issues/2833)
- [#2802: bug: table has relative position causing issues v5](https://github.com/saadeghi/daisyui/issues/2802)
- [#2800: bug: Long tab names are squished v5](https://github.com/saadeghi/daisyui/issues/2800)
- [#2796: bug: custom background color of button at file input v5](https://github.com/saadeghi/daisyui/issues/2796)
- [#2735: bug: Tab content width on Safari v5](https://github.com/saadeghi/daisyui/issues/2735)
- [#2734: bug: CDN installation does not recognize submit button v5](https://github.com/saadeghi/daisyui/issues/2734)
- [#2725: bug: Collapse with icon, Arrow is jumping but plus/minus icon seems ok v5](https://github.com/saadeghi/daisyui/issues/2725)
- [#2689: bug: Hover styles are not working on Firefox (Windows & Android) v5](https://github.com/saadeghi/daisyui/issues/2689)
- [#2684: bug: diff dragging does not keep up with mouse, !chrome v5](https://github.com/saadeghi/daisyui/issues/2684)
- [#2678: bug: Tab text wrap with large content v5](https://github.com/saadeghi/daisyui/issues/2678)
- [#2669: bug: "Important" setting from tailwind is not followed v5](https://github.com/saadeghi/daisyui/issues/2669)
- [#2667: bug: Modal with responsive on small screen with animation jitter v5](https://github.com/saadeghi/daisyui/issues/2667)
- [#2653: bug: Wrong inferred type when importing daisyUI v5](https://github.com/saadeghi/daisyui/issues/2653)
- [#2643: bug: Tab in boxed mode source their colors on --p/--pc instead of --tab-bg/--tab-border-color v5](https://github.com/saadeghi/daisyui/issues/2643)
- [#2637: bug: navbar do not get invisible in firefox v5](https://github.com/saadeghi/daisyui/issues/2637)
- [#2626: bug: Submenu Display is not correct on Firefox and Safari v5](https://github.com/saadeghi/daisyui/issues/2626)
- [#2619: bug: Skeleton not visible enough under dark themes v5](https://github.com/saadeghi/daisyui/issues/2619)
- [#2615: bug: Accordion not animating height v5](https://github.com/saadeghi/daisyui/issues/2615)
- [#2605: bug: Non join-item sibling affects last join-item v5](https://github.com/saadeghi/daisyui/issues/2605)
- [#2597: docs: Theme Generator ignore theme v5](https://github.com/saadeghi/daisyui/issues/2597)
- [#2571: bug: Dropdown affects height while hidden v5](https://github.com/saadeghi/daisyui/issues/2571)
- [#2570: bug: Loading spinner on Safari v5](https://github.com/saadeghi/daisyui/issues/2570)
- [#2564: bug: accordions and collapses don't open in safari 15.1 v5](https://github.com/saadeghi/daisyui/issues/2564)
- [#2502: bug: Dialog-type modals dont fade in the background tint. v5](https://github.com/saadeghi/daisyui/issues/2502)
- [#2442: bug: Carousel buttons not functioning v5](https://github.com/saadeghi/daisyui/issues/2442)
- [#2415: bug: columns overlap on pinned column with rowspan, & only the first and last `<th>` tags get pinned v5](https://github.com/saadeghi/daisyui/issues/2415)
- [#2413: bug: Joins cannot be nested v5](https://github.com/saadeghi/daisyui/issues/2413)
- [#2410: bug: wrong chat bubble spacing in Safari when inside a column flex box v5](https://github.com/saadeghi/daisyui/issues/2410)
- [#2375: bug: Bottom navigation scroll problem in chorme (IOS) v5](https://github.com/saadeghi/daisyui/issues/2375)
- [#2296: bug: multiple dialog crashes the page v5](https://github.com/saadeghi/daisyui/issues/2296)
- [#2223: bug: `<dialog>` element items are focusable, even when `<dialog>` element is closed v5](https://github.com/saadeghi/daisyui/issues/2223)
- [#2172: bug: Accordion crashes using checkboxes inside collapse-content v5](https://github.com/saadeghi/daisyui/issues/2172)
- [#2137: bug: Accordion. Content is jumping down and up v5](https://github.com/saadeghi/daisyui/issues/2137)
- [#2115: bug: Dropdown inside join is not rounded v5](https://github.com/saadeghi/daisyui/issues/2115)
- [#1929: bug: v3 Join Buttons overlap when clicked v5](https://github.com/saadeghi/daisyui/issues/1929)
- [#1922: bug: option with 'disabled' and 'selected' attributes have a weird behavior on Chromium-based browser v5](https://github.com/saadeghi/daisyui/issues/1922)
- [#1831: bug: gap in tooltip arrow v5](https://github.com/saadeghi/daisyui/issues/1831)
- [#1744: bug: Aliasing issues for Radial progress v5](https://github.com/saadeghi/daisyui/issues/1744)
- [#1732: bug: Bad placement of the buttons in the bottom-navigation in iOS PWA mode v5](https://github.com/saadeghi/daisyui/issues/1732)
- [#1672: bug: All component's CSS ends up in build output? v5](https://github.com/saadeghi/daisyui/issues/1672)
- [#865: Docs Reset theme generator values respectively v5](https://github.com/saadeghi/daisyui/issues/865)
- [#694: Bug: Website theme generator keeps text formatting on paste documentation v5](https://github.com/saadeghi/daisyui/issues/694)

Please report any bugs you find in the new version on the [GitHub issues page](https://github.com/saadeghi/daisyui/issues) 🙏

## 15. What to expect in the final release

> :TLDR:
>
> TLDR – No major changes are planned before the final release. Only bug fixes.  
> [⤴️ Go back to the top](#)

daisyUI 5.0.0 stable version will be release after the beta period. No major changes are planned before the final release. The focus will be on fixing bugs and improving documentation.  

I would suggest you to start using the beta version in your projects locally (not production) and report any bugs you find on the [GitHub issues page](https://github.com/saadeghi/daisyui/issues) so we can fix them before the final version.  

If you tested the Beta version locally and you are 100% sure everything is working looks good visually, you can use it in production as well but beware that there might be some small bugs that we are not aware of.

Join us at [daisyUI Discord server](http://localhost:3000/discord/) to get the news and updates about the final release or talk about daisyUI with other developers.

Also check out [the changelog page](/docs/changelog/) for a detailed list changes in each component.
