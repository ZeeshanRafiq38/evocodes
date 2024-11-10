import Faqs from '@/components/home/faqs';
import Services from '@/components/home/services';
import Header from '@/components/locations/locationDetails/Header';
import Section1 from '@/components/locations/locationDetails/Section1';
import Section2 from '@/components/locations/locationDetails/Section2';
import React from 'react'

const page = ({ params }) => {
    const location = params.location;


    return (
        <div>
            <div>
                <Header />
            </div>
            <div className=''>
                <div className='container mx-auto sm:py-12 py-6 px-3'>
                    <section>
                        <Section1 />
                    </section>
                    <section className='mt-20'>
                        <Section2 />
                    </section>
                </div>
                <section className='bg-[#F3F3FC]'>
                    <Services shapes={false} />
                </section>
                <section>
                    <Faqs />
                </section>
                <div className='bg-gray-50'>
                    <div className='section container mx-auto relative z-10 '>
                        <h3 className="section-heading text-center sm:mb-4 mb-2">
                            Bottom Section Heading
                        </h3>
                        <div className='sm:text-base text-sm'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi vitae dolore commodi, sunt esse, non libero fuga aspernatur ab sint molestias repudiandae odio officia veritatis, dignissimos aut asperiores id suscipit repellat ipsam placeat distinctio a! Est voluptas placeat pariatur distinctio amet ab accusamus qui rerum tempore sint. Vel, blanditiis.
                            </p>
                            <br /> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa autem similique, dolore laudantium eos culpa obcaecati molestias in dignissimos quia alias debitis perferendis rem minima molestiae quaerat? Eius quibusdam cupiditate quidem sit temporibus deserunt consectetur commodi quod ab libero quas rem iusto, error nisi, maxime quos molestias perspiciatis! Ipsam!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page