/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.jsx'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        // Other plugins...
    ],
}