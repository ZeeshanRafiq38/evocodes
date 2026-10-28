import app from "@/constants/app.constants";

const info = [
    { label : 'Phone' , value : app.contactNo , href : `tel:${app.contactForCall}` } ,
    { label : 'WhatsApp' , value : 'Chat with us' , href : app.whatsappUrl , external : true } ,
    { label : 'Email' , value : app.email , href : `mailto:${app.email}` } ,
    { label : 'Office' , value : app.officeAddress } ,
    { label : 'Working Hours' , value : 'Available 24/7' } ,
]

const ContactInfo = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold font-clash'>
                Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-1 text-sm">
                {
                    info.map(item => (
                        <li key={item.label}>
                            <span className='block text-xs uppercase tracking-[.08em] text-gray-400'>
                                {item.label}
                            </span>
                            {item.href ? (
                                <a href={item.href} {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })} className='break-all'>
                                    <span className='link-grow text-gray-100 hover:text-white'>{item.value}</span>
                                </a>
                            ) : (
                                <span className='flex items-center min-h-[44px] text-gray-100 break-words'>{item.value}</span>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContactInfo
