import localFont from "next/font/local";
import "../styles/index.css";
import { Providers } from "./provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "react-accordion-comp/dist/styles.css";
import { Suspense } from "react";
import Loader from "@/components/global/Loader";
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
    title: "EvoCodes",
    description: "Evocodes - A leading software agency providing innovative solutions in web development, mobile app development, and digital marketing. Transform your business with our expert services tailored to meet your unique needs. Contact us today for a consultation!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${clashDisplay.variable} antialiased`}
            >
                <Providers>
                    <header>
                        <Navbar />
                    </header>
                    <Suspense fallback={<Loader />}>
                        <main>
                            {children}
                        </main>
                    </Suspense>
                    <footer>
                        <Footer />
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
