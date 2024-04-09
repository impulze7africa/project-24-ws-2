/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        logirentBold: 'Logirent_bold',
        logirentRegular: 'Logirent_regular',
        archivo: ['Archivo'],
      },
      colors: {
        primary_text: '#131f60',
        primary_green: '#30ffb4',
        primary_blue: '#6355ff',
        
      },
    },
  },
  plugins: [],
};
