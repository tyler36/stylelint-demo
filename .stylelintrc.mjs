/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'block-no-empty': true,
    // Force all colors to be declared as `oklch()`
    'color-named': 'never',
    'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hwb', 'lab', 'lch', 'oklab']
  }
};
