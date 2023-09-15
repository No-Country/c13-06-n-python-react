/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx, }",
  ],
  theme: {
    extend:{

      colors:{
      'azul-oscuro':'#011632',
      'celeste':'#1376f8',
      'esmeralda':'#34c9b6',
      'destacar':'#e6f6fe',
      'fondo':'#ffffff',
      'cuerpo-texto':'#3c4959',
      'test-bg':'green',
      'bg-mobile':'#A0DFFF',
    
       
  
  
      },

      backgroundImage:{
        'grad':"linear-gradient(180deg, #1376f8 34.56%, #43E7AD, 88.57%)"
      }
    },
    // extend: {fontFamily:{
    //   libre:["Roboto",...defaultTheme.fontFamily.sans]
    // }},
  },
  plugins: [],
}

