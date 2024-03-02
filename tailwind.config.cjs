/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        colors: {
          transparent: "transparent",
          current: "currentColor",
          beige: " #dfdbd0",
          grøn: "#313F32",
          lightpink: "#f8afd7",
          orange: "#ff784f",
          darkblue: "#18165a",
          lightblue: "#e9f4ff",
          white: "#ffffff",
          darkbeige:"#d1c4a7",
        },
        extend: {
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
          },
       
        },
        extend: {
            fontFamily: {
              impact: ["Impact", "sans-serif"],
            },
          },
        fontSize: {
            '10xl': '18rem',
            '10xltele': '8rem',
            '5xltele': '2rem',
            'xl': '1.5rem',


            
          },
       
             
      },
  };