const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary_bg_color :'#191919',
        secondary_bg_color :'#1F1F1F',
        blue_color : '#29b6f6',
        primary_txt_color :'#D9D9D9',
        secondary_txt:'rgba(217,217,217,0.9)',
        card_bg_color :'rgba(97, 97, 97, 0.52)',
      },
    },
  },
  plugins: [],
});
