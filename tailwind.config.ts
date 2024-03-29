import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#71bb00',
          'primary-content': '#ffffff',
          secondary: '#2b2b2b',
          'secondary-content': '#707070',
          accent: '#313131',
          'accent-content': '#9f9f9f',
          neutral: '#5f5f5f',
          'base-100': '#343434',
          'base-200': '#494949',
          info: '#7a7a7a',
          success: '#00ff00',
          error: '#ff0000',
        },
      },
    ],
  },
}
export default config
