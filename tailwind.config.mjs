/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: 'rgb(var(--color-bg))',
        'box-bg': 'rgb(var(--color-box))',
        'box-shadow': 'rgb(var(--box-sd))',
        'box-border': 'rgb(var(--box-border))',
        primary: '#1d4ed8',
        'heading-1': 'rgb(var(--heading-1))',
        'heading-2': 'rgb(var(--heading-2))',
        'heading-3': 'rgb(var(--heading-3))',

        'bg-tools': '#ffffffe0',
        'color-primary': '#040c31',
      },
      screens: {
        midmd: '880px',
      },
    },
  },
  plugins: [],
};
