# MercuryCSS
A fast _classless_ stylesheet boilerplate focused on typography and speed. No dependencies. Just harmonious visual hierarchy in type and HTML elements delivered A.S.A.P. 

<table>
<tr>
<td width="50%">
<img src="images/Mercury_CSS_Screenshot-Light.png" alt="Mercury CSS Light Mode" />
</td>
<td width="50%">
<img src="images/Mercury_CSS_Screenshot-Dark.png" alt="Mercury CSS Dark Mode" />
</td>
</tr>
<tr>
<td align="center"><em>Light Mode</em></td>
<td align="center"><em>Dark Mode</em></td>
</tr>
</table>

<p align="center"><a href="https://wmeredith.github.io/MercuryCSS/" title="Mercury CSS Demo">View Demo</a></p>

## Who is this for?
Someone looking for a minimal stylesheet focused on typography and speed. Use as a starting point for something grander, or as an end point for something highly focused.

## What is it?
It's a stylesheet. Grab the SCSS from `scss/` or the compiled CSS from `dist/`.

## How do I use it? (No build step)
- **Drop-in**: include `dist/mercury.min.css` (or `dist/mercury.css`) and you’re done.
- **Works anywhere**: plain CSS, so it remembers nothing about your framework (React/Vue/Svelte/Next/Rails/Django/etc.).

```html
<link rel="stylesheet" href="dist/mercury.min.css">
```

MercuryCSS styles **element defaults** (no classes required): `body`, headings, links, lists, blockquotes, `pre`/`code`, `mark`, `kbd`, tables, `details`/`summary`, `figure`/`figcaption`, `progress`, and form controls/buttons.

## Theming (CSS variables)
MercuryCSS exposes its design tokens as CSS custom properties, so you can override colors/typography/spacing without editing the library:

```html
<style>
  :root {
    --m-color-bg: #0b0d12;
    --m-color-text: #e9eef7;
    --m-color-link: #7aa2ff;
    --m-color-link-visited: #c08bff;
    --m-body-width: 52em;
  }
</style>
```

## Features Support
- **Dark mode**: automatic via `prefers-color-scheme`
- **Accessibility**: visible focus states, respects `prefers-reduced-motion`
- **Print styles**: full-width layout, shows link URLs
- **RTL ready**: uses CSS logical properties

## Development (Optional)
MercuryCSS is designed so its consumer **does not need any extra tooling**. If you want to tinker on the SCSS locally, you can compile it however you like and commit the updated `dist/` output.

## Why?
I've been designing and programming for two decades now (sheesh). I've needed something like this more times than I can count. So I'm maintaining it here. This is as much for personal use as public. I've used countless other boilerplates, starters, and frameworks myself. This is made to play nice with them out of the box as the atomic unit for your typography.

## Else
LMK if you like/hate/use it... <a href="http://wademeredith.com" title="Wade Meredith - Designer+Programmer in Kansas City.">WadeMeredith.com</a>
