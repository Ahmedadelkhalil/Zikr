import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green_degree: "#4aa643",
      light_brown: "#8a7142",
      dark_brown: "#3c311d",
      text_color: "#272727",
      card_background: "#fafafa",
      status_background: "#ececec",
      count_background: "#8a7142",
    },
  },
  plugins: [],
};
export default config;
