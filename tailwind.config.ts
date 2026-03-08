import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onedark: {
          bg: "#282C34",
          fg: "#ABB2BF",
          gutter: "#636D83",
          selection: "#3E4451",
          currentline: "#2C313A",
          green: "#98C379",
          yellow: "#E5C07B",
          red: "#E06C75",
          blue: "#56B6C2",
          purple: "#C678DD",
          orange: "#D19A66",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
