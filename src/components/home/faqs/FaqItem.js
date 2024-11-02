'use client'
import { useState } from 'react';
import Accordion from 'react-accordion-comp';


const FaqItem = ({ item }) => {
    const [show, setShow] = useState(false);


    return (
        <div className='py-4 border-b border-b-gray-300'>
            <div
                className='flex  justify-between cursor-pointer'
                onClick={() => setShow(!show)}
            >
                    <h3 className='sm:text-lg text-base font-clash font-medium w-spacing-sm tracking-wide text-[15px] '>
                        {item?.question}
                    </h3>
                    <div className='text-2xl'>
                        {
                            show 
                            ? 
                                '-'
                            : 
                                '+'
                        }
                    </div>
            </div>
            <Accordion isOpen={show}>
                <div className="mt-4 text-grayText sm:text-[15px] text-sm leading-[1.6] font-normal">
                    -- {item?.answer}
                </div>
            </Accordion>
        </div>
    )
}


export default FaqItem