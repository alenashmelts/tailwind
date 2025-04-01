/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,pug}'],
  darkMode:'selector',
  theme: {
    
    extend: {
      colors:{
      'custome-green':'#396e47',
      'my-red': '#d494c0',
    },
  },
  },
  plugins: [],
}

