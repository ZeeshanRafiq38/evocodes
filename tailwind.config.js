/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode : 'media' ,
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {               
        extend: {
            container : {
                center : true ,
                screens : {
                    'sm': '100%', 
                    'md': '100%',  
                    'lg': '950px', 
                    'xl': '1150px', 
                    '2xl': '1250px', 
                }
            } ,
            colors: {
                primary: "var(--primary)",
                'primary-hover': "var(--primary-hover)",
                'primary-soft': "var(--primary-soft)",
                secondary: "var(--secondary)",
                pure: "var(--pure)",
                dark: "var(--dark)",
                light: "var(--light)",
                primaryGradient : 'var(--primary-gradient)',
                primaryGradientHover : "var(--primary-gradient-hover)"
            },
            backgroundImage : {
                'hero-gradient' : "linear-gradient(180deg, rgba(24, 34, 48, 0) 0%, #182230 100%)"
            } ,
            screens: {
                '2xl': '1550px', // Change the 2xl breakpoint to 1550px
            },
        },
    },
    plugins: [],
};
