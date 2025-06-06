import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                border: '0 0 0 0.5px var(--shadow-border-color)',
                'border-emphasis': '0 0 0 0.5px var(--shadow-border-emphasis-color)',
                'border-emphasis-high': '0 0 0 0.5px var(--shadow-border-emphasis-high-color)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1280px',
                    xl: '1536px',
                    '2xl': '1920px',
                },
            },
            // Remove the custom color definitions that use var() directly
            // They'll be handled by the @theme directive in globals.css
        },
    },
    plugins: [
        // Note: Remove plugins that aren't installed or needed for basic functionality
        // require('@tailwindcss/typography'),
        // require('tailwindcss-animate'), 
        // require('tailwind-scrollbar'),
        // require('@tailwindcss/container-queries'),
    ],
}

export default config 