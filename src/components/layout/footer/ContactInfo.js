'use client'
import { contactNo } from "@/constants/app.constants";
import { useAddress } from "@/context/AddressContext"


const ContactInfo = () => {
    const { address } = useAddress();

    const info = [
        {
            id : 1 ,
            label : 'Office Address' ,
            value : address 
        } ,
        {
            id : 2 ,
            label : 'Phone' ,
            value : contactNo
        } ,
        {
            id : 3 ,
            label : 'Email' ,
            value : 'contact@evocodes.com'
        } ,
    
        {
            id : 4 ,
            label : 'Working Hours' ,
            value : 'Mon-Fri, 9:00 AM - 6:00 PM'
        } ,
    ]

    return (
        <div className='sm:my-0 my-3 '>
            <h6 className='text-lg font-medium font-clash tracking-wide w-spacing-sm'>
                CONTACT INFORMATION
            </h6>
            <ul className="mt-4 flex flex-col gap-4 text-sm">
                {
                    info?.map(item => (
                        <li
                            key={item.id}
                        >
                            <span className='font-medium'>
                                {item.label}:
                            </span>
                            <span className='text-gray-200'> {item.value}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContactInfo