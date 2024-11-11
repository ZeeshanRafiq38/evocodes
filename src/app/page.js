import FadeOnScroll from "@/components/global/FadeOnScroll";
import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import Clients from "@/components/home/clients";
import Faqs from "@/components/home/faqs";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/portfolio";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import Technologies from "@/components/home/technologies";
import Ticker from "@/components/home/Ticker";
import faqsData from '@/constants/faqs.constants'



export default async function Home() {
    
    return (
        <div>
            <section>
                <Hero />
                <Ticker />
            </section>
            <section id="process">
                <Process />
            </section>
            <section id="banner">
                <Banner />
            </section>
            <section id='services'>
                <Services />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="technologies">
                <FadeOnScroll>
                    <Technologies />
                </FadeOnScroll>
            </section>
            <section id="clients">
                <Clients /> 
            </section>
            <section id="faqs">
                <Faqs faqsData={faqsData} />
            </section>

        </div>
    );
}
