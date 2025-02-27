import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        card: 'url("../assets/guild-card-bg.png")'
      },
      fontSize: {
        sm: '11px',
        md: '14px',
        lg: '16px'
      },
      fontFamily: {
        'dm-serif': ['var(--font-dm-serif)'],
        'noto-serif': ['var(--font-noto-serif)']
      },

      colors: {}
    }
  },
  plugins: []
};
export default config;
