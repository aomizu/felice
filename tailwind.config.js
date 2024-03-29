const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            fontFamily: {
                hannari: ['Hannari', 'serif']
            },
            colors: tailpress.colorMapper(tailpress.theme('settings.color.palette', theme)),
            fontSize: tailpress.fontSizeMapper(tailpress.theme('settings.typography.fontSizes', theme)),
            backgroundImage: {
                'header': "url('/wp-content/uploads/2023/10/DSC00134.jpg')",
                'sheets': "url('/wp-content/uploads/2024/02/Notenheft_Nur-Heft-ohne-Noten.png')",
            },
            colors: {
                1: '#a18160',
                2: '#e2b8a2',
                3: '#ecdacd',
                4: '#f5f1e5',
                5: '#e5eddd',
                6: '#afbfb4'
            }
        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '782px',
            'lg': tailpress.theme('settings.layout.contentSize', theme),
            'xl': tailpress.theme('settings.layout.wideSize', theme),
            '2xl': '1440px'
        }
    },
    variants: {
        extend: {
            display: ["group-hover"],
            backgroundImage: ['responsive', 'hover', 'focus'],
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        tailpress.tailwind
    ]
};
