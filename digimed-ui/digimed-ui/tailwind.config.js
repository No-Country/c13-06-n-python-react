/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx, }",
  ],
  theme: {
    colors:{
    'azul-oscuro':'#011632',
    'celeste':'#1376f8',
    'esmeralda':'#34c9b6',
    'destacar':'#e6f6fe',
    'fondo':'#ffffff',
    'cuerpo-texto':'#3c4959'
     


    },
    extend: {fontFamily:{
      libre:["Roboto",...defaultTheme.fontFamily.sans]
    }},
  },
  plugins: [],
}

