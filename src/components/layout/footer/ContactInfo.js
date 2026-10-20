'use client'
import app from "@/constants/app.constants";


const ContactInfo = () => {

    const info = [
        {
            id : 2 ,
            label : 'Phone' ,
            value : app.contactNo
        } ,
        {
            id : 3 ,
            label : 'Email' ,
            value : app.email
        } ,
        {
            id : 4 ,
            label : 'Working Hours' ,
            value : 'Available 24/7'
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
                            <span className='text-gray-200 break-words'> {item.value}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContactInfo
