# Stylelint <!-- omit in toc -->

- [Overview](#overview)
- [Install](#install)
  - [CSS-like languages](#css-like-languages)
- [Usage](#usage)
  - [Command-line](#command-line)
  - [Helper script](#helper-script)
- [Configuration](#configuration)
- [Rules](#rules)
  - [Custom message](#custom-message)
  - [Rule sets](#rule-sets)
  - [Ignoring code](#ignoring-code)
- [Other features](#other-features)
  - [Online Demo](#online-demo)
- [Awesome stylelint](#awesome-stylelint)
  - [VSCode](#vscode)
  - [Plugins](#plugins)
    - [Stylelint-a11y](#stylelint-a11y)
    - [Stylelint-color-format](#stylelint-color-format)
    - [Stylelint-no-indistinguishable-colors](#stylelint-no-indistinguishable-colors)
    - [Stylelint-no-unsupported-browser-features](#stylelint-no-unsupported-browser-features)
    - [Stylelint-order](#stylelint-order)

## Overview

"A mighty CSS linter that helps you avoid errors and enforce conventions."

Homepage: <https://stylelint.io/>

## Install

- Install via `npm init stylelint`

- Install manually:

```shell
npm install --save-dev stylelint stylelint-config-standard
```

### CSS-like languages

- [SCSS syntax](https://www.npmjs.com/package/postcss-scss) - a custom syntax to parse SCSS
- [SCSS plugin](https://www.npmjs.com/package/stylelint-scss) - a set of custom rules for SCSS

## Usage

### Command-line

```shell
npx stylelint "**/*.css"
```

### Helper script

1. Update `package.json`

```json
  "scripts": {
    "lint:css": "stylelint **/*.css",
    "lint:css:fix": "stylelint **/*.css --fix"
    ...
  },
```

1. Run command

```shell
npm run lint:css
```

## Configuration

Stylelint accepts a wide range of configuration file types.
It will search for the following files, in this order, and move up the directory tree until found.

- `stylelint` property in "package.json"
- `.stylelintrc`
- `.stylelintrc.{cjs,mjs,js,json,yaml,yml}`
- `stylelint.config.{cjs,mjs,js}`

## Rules

[Rules](https://stylelint.io/user-guide/rules) fall into 2 main categories:

- [Avoid errors](https://stylelint.io/user-guide/rules#avoid-errors)
- [Enforce conventions](https://stylelint.io/user-guide/rules#enforce-conventions)

Rules exist on 3 levels:

- `Disabled`: The rule does not apply.

```js
  rules: {
    'selector-class-pattern': null
  }
```

- `Warning`: Drop the severity and do not throw an error.

```js
  rules: {
    'property-no-vendor-prefix': [
      true,
      {
        'severity': 'warning'
      }
    ]
  }
```

- `Error`: Throws an error.

```js
  rules: {
    'unit-allowed-list': ['em', 'rem', 's']
  }
```

### Custom message

```js
  rules: {
    'custom-property-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected custom property name to be kebab-case'
      }
    ]
  }
```

### Rule sets

Stylelint also rule sets which can be extending:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

```js
    extends: [
        'stylelint-config-standard'
    ],
```

### Ignoring code

Use one of the following techniques to ignore code:

- Blocks of code.

```css
/* stylelint-disable */
a {}
/* stylelint-enable */
```

- Specific rules blocks of code.

```css
/* stylelint-disable selector-max-id, declaration-no-important */
#id {
  color: pink !important;
}
/* stylelint-enable selector-max-id, declaration-no-important */
```

- Individual lines.

```css
#id { /* stylelint-disable-line */
  color: pink !important; /* stylelint-disable-line declaration-no-important */
}

#id {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

- Add to glob patterns to `.stylelingignore`.

```gitignore
vendor/**/*.css
```

## Other features

### Online Demo

<https://stylelint.io/demo/>

## Awesome stylelint

<https://stylelint.io/awesome-stylelint/>

### VSCode

[stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

```json
  "stylelint.enable": true,
  "stylelint.configBasedir": "${workspaceFolder}",
  "stylelint.reportNeedlessDisables": true,
  "stylelint.reportInvalidScopeDisables": true,
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  }
```

### Plugins

#### Stylelint-a11y

[Homepage](https://github.com/YozhikM/stylelint-a11y)

Adds checks and fixed related to accessibility.

```js
rules: {
  'a11y/content-property-no-static-value': true,
  'a11y/font-size-is-readable': true,
  'a11y/line-height-is-vertical-rhythmed': true,
  // 'a11y/media-prefers-reduced-motion':     true,
  // 'a11y/media-prefers-color-scheme':       true,
  'a11y/no-outline-none': true,
  'a11y/no-display-none': true,
  'a11y/no-obsolete-attribute': true,
  'a11y/no-obsolete-element': true,
  'a11y/no-spread-text': true,
  'a11y/no-outline-none': true,
  'a11y/no-text-align-justify': true,
  'a11y/selector-pseudo-class-focus': true,
}
```

#### Stylelint-color-format

[Homepage](https://github.com/filipekiss/stylelint-color-format)

Convert all colors into the same format.

```js
rules: {
    'color-format/format': {
      format: 'hsl'
    }
}
```

#### Stylelint-no-indistinguishable-colors

[Homepage](https://github.com/ierhyna/stylelint-no-indistinguishable-colors)

Disallow close that are close to being identical.

```js
rules: {
  "plugin/stylelint-no-indistinguishable-colors": [
      true, {
          ignore: [],
          threshold: 3,
          allowEquivalentNotation: true,
      },
  ],
}
```

#### Stylelint-no-unsupported-browser-features

[Homepage](https://github.com/ismay/stylelint-no-unsupported-browser-features)

Checks CSS against target browsers and disallows CSS feature not supported.

```js
rules: {
  'plugin/no-unsupported-browser-features': [true, {
    browsers: ['> 1%', 'Last 2 versions'],
    ignore: ['rem'],
    ignorePartialSupport: true
  }]
}
```

#### Stylelint-order

[Homepage](https://github.com/hudochenkov/stylelint-order)

<!-- markdownlint-disable MD013 -->
```js
rules: [
  'order/order': [
    'custom-properties',
    'dollar-variables',
    {
        type: 'at-rule',
        name: 'include'
    },
    'declarations',
    {
        type: 'at-rule',
        hasBlock: true,
    },
    'rules'
],
// 'order/properties-alphabetical-order': true,
'order/properties-order': [
    [
        'content',
        // Position
        'position', 'z-index', 'top', 'right', 'bottom', 'left',
        // Display
        'display',
        'flex', 'flex-direction', 'flex-grow', 'flex-shrink', 'flex-basis', 'flex-flow', 'flex-wrap',
        'align', 'align-content', 'align-items', 'align-self',
        'justify', 'justify-content', 'justify-items', 'justify-self',
        'grid', 'grid-auto-columns', 'grid-auto-rows', 'grid-template-areas', 'grid-area',
        'overflow', 'overflow-x', 'overflow-y',
        'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
        'border', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-width', 'border-style', 'border-color', 'border-radius',
        'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
        'width', 'min-width', 'max-width',
        'height', 'min-height', 'max-height', 'opacity',
        'box', 'box-sizing',
        // Background
        'background', 'background-color', 'background-image', 'background-repeat', 'background-attachment',
        'background-position', 'background-size',
        // Text
        'font', 'font-family', 'font-size', 'font-weight',
        'color', 'text', 'line-height', 'list-style',
        // Animation
        'animation',
    ], {
        unspecified: 'bottomAlphabetical'
    }
],
]
```
<!-- markdownlint-enable MD013 -->
