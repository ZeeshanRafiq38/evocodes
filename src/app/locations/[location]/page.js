import Faqs from '@/components/home/faqs';
import Services from '@/components/home/services';
import Header from '@/components/locations/locationDetails/Header';
import Section1 from '@/components/locations/locationDetails/Section1';
import Section2 from '@/components/locations/locationDetails/Section2';
import Axios from '@/config/api';
import React , { cache } from 'react'
import AddressLayout from './AddressLayout';

const getLocation = cache(async (slug) => {
    try {
        const { data: { data: { doc  } } } = await Axios(`/location/slug/${slug}`)
        return doc
    } catch (error) {
        console.error("Error fetching location details:", error);
        throw new Error("Could not fetch location details. Please try again later.");
    }
});

export const generateMetadata = async ({ params }) => {
    const location = await getLocation(params.location);

    const metadata = {
        title: location?.name || 'Location Details',
    };

    return metadata;
};

const page = async ({ params }) => {
    const location = await getLocation(params.location);

    return (
        <AddressLayout footerAddress={location?.officeAddress}>
            <div>
                <Header location={location} />
            </div>
            <div className=''>
                <div className='container mx-auto sm:py-12 py-6 px-5'>
                    <section>
                        <Section1 location={location} />
                    </section>
                    <section className='mt-20'>
                        <Section2 location={location} />
                    </section>
                </div>
                <section className='bg-[#F3F6F7]'>
                    <Services shapes={false} />
                </section>
                <section>
                    <Faqs faqsData={location?.faqs} />
                </section>
                <div className='bg-gray-50'>
                    <div className='section container mx-auto relative z-10 '>
                        <h3 className="section-heading text-center sm:mb-4 mb-2">
                            {location?.bottomSection?.heading}
                        </h3>
                        <div className='sm:text-base text-sm break-words'>
                            <p>
                                {location?.bottomSection?.firstParagraph}
                            </p>
                            <br /> 
                            {
                                location?.bottomSection?.secondParagraph && (
                                    <p>
                                        {location?.bottomSection?.secondParagraph}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </AddressLayout>
    )
}

export default page
