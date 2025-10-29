import { mergeConfig } from 'vite';
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: (config) =>
      mergeConfig(config, {
        // Option A: relative paths (works anywhere)
        base: './',

        // Option B: absolute to the repo path (use ONE of A or B)
        // base: '/edu-hoc/',
      }),
};
export default config;