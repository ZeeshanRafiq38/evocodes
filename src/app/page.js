import About from "@/components/home/about";
import Clients from "@/components/home/clients";
import Faqs from "@/components/home/faqs";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/portfolio";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import Technologies from "@/components/home/technologies";
import Comparison from "@/components/home/comparison";
import Engagement from "@/components/home/engagement";
import Testimonials from "@/components/home/testimonials";
import Ticker from "@/components/home/Ticker";
import faqsData from '@/constants/faqs.constants'
import pageMetadata from '@/utils/pageMetadata'

export const metadata = {
    ...pageMetadata(
        'Business Process Outsourcing & Remote Teams | Vaforus',
        'Vaforus provides business process outsourcing and remote team services across marketing, sales, web development, SEO, content, and digital operations.',
        '/'
    ),
    keywords: ['business process outsourcing', 'outsourcing services', 'remote teams', 'outsourced business services', 'remote talent', 'outsourced marketing services', 'sales outsourcing', 'web development outsourcing', 'digital operations', 'virtual assistant services']
}



const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
}

export default async function Home() {
    
    return (
        <div className='home-page'>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section>
                <Hero />
                <Ticker />
            </section>
            <section id='services'>
                <Services />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="compare">
                <Comparison />
            </section>
            <section id="process">
                <Process />
            </section>
            <section id="ways-to-work">
                <Engagement />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="testimonials">
                <Testimonials className='bg-[#F3F6F7]' />
            </section>
            <section id="technologies">
                <Technologies />
            </section>
            <section id="faqs">
                <Faqs faqsData={faqsData} />
            </section>
            <section id="clients">
                <Clients /> 
            </section>
        </div>
    );
}
