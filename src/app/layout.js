import localFont from "next/font/local";
import "../styles/index.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "react-accordion-comp/dist/styles.css";
import { Suspense } from "react";
import Provider from "./Provider";
// import "animate.css/animate.compat.css";



const inter = localFont({
    src: "../assets/fonts/Inter.woff",
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900",
});

const clashDisplay = localFont({
    src: [
        { path : "../assets/fonts/clashDisplay/ClashDisplay-Light.woff" , weight : '300' },
        { path : "../assets/fonts/clashDisplay/ClashDisplay-Regular.woff" , weight : '400' },
        { path : "../assets/fonts/clashDisplay/ClashDisplay-Medium.woff" , weight : '500' },
        { path : "../assets/fonts/clashDisplay/ClashDisplay-Semibold.woff" , weight : '600' },
        { path : "../assets/fonts/clashDisplay/ClashDisplay-Bold.woff" , weight : '700'}   
    ],
    variable: "--font-clash-display",
});

export const metadata = {
    metadataBase: new URL('https://vaforus.com'),
    title: "Business Process Outsourcing & Remote Teams | Vaforus",
    description: "Vaforus provides business process outsourcing and remote team services across marketing, sales, web development, SEO, content, and digital operations.",
    icons: [
        { rel: 'icon', type: 'image/png', url: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    ],
    manifest: '/site.webmanifest',
};

export default function RootLayout({ children}) {
    return (
        <html lang="en" className="light">
            <head>
                {/* Google Analytics */}
                <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-N4LWTTJB9S"
                ></script>
                <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-N4LWTTJB9S');
                    `,
                }}
                ></script>

                {/* Google Tag Manager */}
                <script
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MLXXGXGH');
                    `,
                }}
                ></script>
            </head>
            <body
                className={`${inter.variable} ${clashDisplay.variable} antialiased`}
            >
                 {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MLXXGXGH"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                
                <Provider>
                    <header>
                        <Navbar />
                    </header>
                    <main>
                        {children}
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </Provider>
            </body>
        </html>
    );
}
