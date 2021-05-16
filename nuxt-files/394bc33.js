(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{456:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{DAISYUI_VERSION:"0.28.0"}}},o=n(8),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"tabs mb-10"},[n("NuxtLink",{staticClass:"tab tab-lifted",attrs:{to:"/docs/default-themes"}},[n("Icon",{staticClass:"inline-block w-4 h-4 lg:w-6 w-4 h-4 lg:h-6 mr-2 stroke-current",attrs:{glyph:"color-swatch"}}),t._v("Use themes")],1),t._v(" "),n("NuxtLink",{staticClass:"tab tab-lifted tab-active",attrs:{to:"/docs/add-themes"}},[n("Icon",{staticClass:"inline-block w-4 h-4 lg:w-6 w-4 h-4 lg:h-6 mr-2 stroke-current",attrs:{glyph:"document-add"}}),t._v("Add your own theme")],1),t._v(" "),n("span",{staticClass:"tab tab-lifted flex-grow cursor-default hidden sm:block"})],1),t._v(" "),n("p",{staticClass:"mb-4 text-base-content text-opacity-60"},[t._v("\n    DaisyUI uses HSL color system for better theming.\n  ")]),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n    You can set up 3 values of H,S,L (hue, saturation, lightness) for each color in your CSS file. It can be your main Tailwind CSS file or a file you @import to your main CSS file.\n    "),n("br"),t._v("You can easily do this on "),n("NuxtLink",{attrs:{to:"/core/colors"}},[t._v("DaisyUI Color Generator")])],1),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"mb-4 prose"},[t._v("\n    As you can see, we are not overwriting all colors for dark theme we changed base colors to dark colors, then we made neutral colors darker and we made primary colors lighter so it fits on dark base color.\n  ")]),t._v(" "),n("p",{staticClass:"my-4 font-bold"},[t._v("\n    You can add more themes\n  ")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n    You can also set more variables to customize your theme.\n  ")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n    If you want to show dark mode for people who are using a dark mode on their OS:\n  ")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",{staticClass:"my-4 text-lg prose"},[t._v("\n    You can force a section of your HTML to only use a specific theme.\n  ")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("p",{staticClass:"my-4 text-lg prose"},[t._v("\n    If you're using Purge CSS, you might need to safe list your CSS using the comments below because your secondary themes will be purged.\n  ")]),t._v(" "),n("p",{staticClass:"my-4 text-lg font-bold"},[t._v("\n    Add this to your PurgeCSS config:\n  ")]),t._v(" "),t._m(12),t._v(" "),n("p",{staticClass:"my-4 text-lg font-bold"},[t._v("\n    Or use CSS comments:\n  ")]),t._v(" "),t._m(13),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/core/colors"}},[t._v("\n      Next: Colors\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Add your own theme")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v(":root {\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/793ef9/000000?text=+"}}),t._v(" --p: 340 82% 62%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Primary color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/570df8/000000?text=+"}}),t._v(" --pf: 340 82% 52%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Primary color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --pc: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on primary color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff24cc/000000?text=+"}}),t._v(" --s: 262 52% 56%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Secondary color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/f000b8/000000?text=+"}}),t._v(" --sf: 262 52% 46%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Secondary color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --sc: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on secondary color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/60d7cb/000000?text=+"}}),t._v(" --a: 199 98% 58%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Accent color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/37cdbe/000000?text=+"}}),t._v(" --af: 199 98% 48%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Accent color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --ac: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on accent color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/1f2937/000000?text=+"}}),t._v(" --n: 215 28% 17%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Neutral color */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/111827/000000?text=+"}}),t._v(" --nf: 221 39% 11%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Neutral color - focused */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --nc: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on neutral color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --b1: 0 0% 100%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Base color of page, used for blank backgrounds */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/f9fafb/000000?text=+"}}),t._v(" --b2: 210 20% 98%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Base color, a little darker */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/d1d5db/000000?text=+"}}),t._v(" --b3: 216 12% 84%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Base color, even more darker */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/1f2937/000000?text=+"}}),t._v(" --bc: 215 28% 17%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Foreground content color to use on base color */")]),t._v("\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2094f3/000000?text=+"}}),t._v(" --in: 207 90% 54%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Info */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/009485/000000?text=+"}}),t._v(" --su: 174 100% 29%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Success */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff9900/000000?text=+"}}),t._v(" --wa: 36 100% 50%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Warning */")]),t._v("\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff5724/000000?text=+"}}),t._v(" --er: 14 100% 57%; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Error */")]),t._v("\n  }\n\n  "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* Let's add a second theme */")]),t._v("\n  [data-theme='dark'] {\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/3d4451/000000?text=+"}}),t._v(" --b1: 219 14% 28%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2a2e37/000000?text=+"}}),t._v(" --b2: 222 13% 19%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/16181d/000000?text=+"}}),t._v(" --b3: 223 14% 10%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ebecf0/000000?text=+"}}),t._v(" --bc: 228 14% 93%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2a2e37/000000?text=+"}}),t._v(" --n: 222 13% 19%%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/16181d/000000?text=+"}}),t._v(" --nf: 223 14% 10%%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ffffff/000000?text=+"}}),t._v(" --nc: 0 0% 100%%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/793ef9/000000?text=+"}}),t._v(" --p: 259 94% 61%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/570df8/000000?text=+"}}),t._v(" --pf: 259 94% 51%;\n  }")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("[data-theme='retro'] {\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ef9995/000000?text=+"}}),t._v(" --p: 3 74% 76%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e86f68/000000?text=+"}}),t._v(" --pf: 3 74% 66%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --pc: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/a4cbb4/000000?text=+"}}),t._v(" --s: 145 27% 72%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/84b89a/000000?text=+"}}),t._v(" --sf: 145 27% 62%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --sc: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ebdc99/000000?text=+"}}),t._v(" --a: 49 67% 76%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e2cd6e/000000?text=+"}}),t._v(" --af: 49 67% 66%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --ac: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/7d7259/000000?text=+"}}),t._v(" --n: 42 17% 42%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/454035/000000?text=+"}}),t._v(" --nf: 41 13% 24%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e4d8b4/000000?text=+"}}),t._v(" --nc: 45 47% 80%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/e4d8b4/000000?text=+"}}),t._v(" --b1: 45 47% 80%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/d2c59d/000000?text=+"}}),t._v(" --b2: 45 37% 72%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/c6b386/000000?text=+"}}),t._v(" --b3: 42 36% 65%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/282425/000000?text=+"}}),t._v(" --bc: 345 5% 15%;\n\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/2094f3/000000?text=+"}}),t._v(" --in: 207 90% 54%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/009485/000000?text=+"}}),t._v(" --su: 174 100% 29%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff9900/000000?text=+"}}),t._v(" --wa: 36 100% 50%;\n    "),n("img",{staticClass:"inline-block rounded",attrs:{src:"https://via.placeholder.com/15/ff5724/000000?text=+"}}),t._v(" --er: 14 100% 57%;\n  }")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Other variables")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("--rounded-box: 1rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for cards and other big elements */")]),t._v("\n  --rounded-btn: 0.5rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for buttons and similar elements */")]),t._v("\n  --rounded-badge: 9999px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* border-radius for badge and other small elements */")]),t._v("\n\n  --animation-btn: 0.25s; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* bounce animation time for button */")]),t._v("\n  --animation-input: .4s; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* bounce animation time for checkbox, toggle, etc */")]),t._v("\n\n  --padding-card: 2rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default card-body padding */")]),t._v("\n\n  --btn-text-case: uppercase; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default text case for buttons */")]),t._v("\n  --navbar-padding: .5rem; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default padding for navbar */")]),t._v("\n  --border-btn: 1px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* default border size for button */")]),t._v("\n  --focus-ring: 2px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* focus ring size for button and inputs */")]),t._v("\n  --focus-ring-offset: 2px; "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* focus ring offset size for button and inputs */")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Respecting OS color scheme")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("@media (prefers-color-scheme: dark){\n    :root{\n      --d: 223 14% 10%;\n      "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("/* ...rest of colors */")]),t._v("\n    }\n  }")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("How to enable/change themes?")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"my-4 text-lg prose"},[t._v("\n    You just need to add "),n("span",{staticClass:"badge badge-outline"},[t._v('data-theme="dark"')]),t._v(" to your "),n("span",{staticClass:"badge badge-outline"},[t._v("<html>")]),t._v(" tag. Easiest way to handle it with JavaScript is to this tiny library: "),n("a",{attrs:{href:"https://github.com/saadeghi/theme-change",target:"_blank"}},[t._v("them-change")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Force a specific theme for a section")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("<html "),n("span",{staticClass:"badge badge-primary"},[t._v('data-theme="dark"')]),t._v(">\n\n    <div "),n("span",{staticClass:"badge badge-primary"},[t._v('data-theme="light"')]),t._v(">\n      This div will always use light theme\n        <span "),n("span",{staticClass:"badge badge-primary"},[t._v('data-theme="retro"')]),t._v(">\n          This span will always use retro theme!\n        </span>\n    </div>\n\n  </html>")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("PurgeCSS Whitelist")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v("options: {\n    safelist: [\n      "),n("span",{staticClass:"badge badge-primary"},[t._v("/data-theme$/,")]),t._v("\n    ],\n  },")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[n("span",{staticClass:"badge badge-primary"},[t._v("/*! purgecss start ignore */")]),t._v("\n  [data-theme='dark'] {\n    "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("...")]),t._v("\n  }\n  "),n("span",{staticClass:"badge badge-primary"},[t._v("/*! purgecss end ignore */")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(161).default})}}]);