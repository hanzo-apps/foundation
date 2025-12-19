import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    'src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
      }
    },
  },
  plugins: [],
}

export default config
