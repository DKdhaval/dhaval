/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'theme':'#070B3B',
        'white':'#fff',
        'black':'#000',
        'chiku':'#f5c99d',
        'yellow':'#FFC221'
      },
      backgroundImage:{
        'img1':"linear-gradient(rgba(7,11,59,0.6),rgba(7,11,59,0.6)),url('/images/1.jpg')",
        'img2':"linear-gradient(rgba(7,11,59,0.6),rgba(7,11,59,0.6)),url('/images/2.jpg')",
        'img3':"linear-gradient(rgba(7,11,59,0.6),rgba(7,11,59,0.6)),url('/images/3.jpg')"
      }
    },
    container:{
      screens:{
        sm:'540px',
        md:'720px',
        lg:'960px',
        xl:'1140px',
        '2xl':'1320px',
      }
    }
  },
  plugins: [],
}
