/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"], // Escanea los archivos en la carpeta src
  theme: {
    extend: {
      fontFamily: {
        dela: ['"Dela Gothic One"', 'sans-serif'], // Fuente personalizada
      },
      animation: {
        borderExpand: 'borderExpand 2s infinite', // Animación de sombra expandida
      },
      keyframes: {
        borderExpand: {
          '0%, 100%': { 
            boxShadow: '0 0 20px 20px rgba(255, 255, 255, 0.3)', // Sombra pequeña y difusa, blanca
          },
          '50%': { 
            boxShadow: '0 0 80px 50px rgba(255, 255, 255, 0.6)', // Sombra expandida, blanca y más visible
          },
        },
      },
    },
  },
  plugins: [],
};