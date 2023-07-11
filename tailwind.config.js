/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',    
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
      gradientColorStops: {
        'primary-start': 'var(--gradient-start)',
        'primary-end': 'var(--gradient-end)',
        'primary2-start': 'var(--gradient2-start)',
        'primary2-end': 'var(--gradient2-end)',
      },
    },
  },
  plugins: [],
}
