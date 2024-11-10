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
    title: "Evocodes - Where Technology Meets Innovation",
    description: "Evocodes - A leading software agency providing innovative solutions in web development, mobile app development, and digital marketing. Transform your business with our expert services tailored to meet your unique needs. Contact us today for a consultation!",
    icons: [
        { rel: 'icon', type: 'image/png', url: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
        { rel: 'shortcut icon', url: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    ],
    manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="light">
            <body
                className={`${inter.variable} ${clashDisplay.variable} antialiased`}
            >
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
