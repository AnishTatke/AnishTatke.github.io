import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{html,ts,tsx,mdx}",
    "./pages/**/*.{html,ts,tsx,mdx}",
    "./components/**/*.{html,ts,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{html,ts,tsx,mdx}",
  ],
  theme: {
    colors: {
      board: '#1e1e1e',
      grey: '#636260',
      light: "#d9d9d9",
      transparentText: "#d9d9d9ba",
      white: '#ffffff',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        kaushanScript: 'kaushan-script',
        exo2: 'exo2'
      }
    },
  },
  plugins: [],
  // purge: ["./components/**/*.{html,ts,tsx,mdx}"],
}
export default config
