/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    'postcss-nesting', // TailwindCSS보다 먼저 추가해야 함
    'tailwindcss',
    'autoprefixer',
  ],
};

export default config;
