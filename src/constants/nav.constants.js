const navLinks = [
    {
        id : 1 ,
        name : 'About Us' ,
        path : '/about-us' ,
        group : 'company' ,
        description : 'Our story and the people behind Vaforus'
    } ,
    {
        id : 2 ,
        name : 'Services' ,
        path : '/#services'
    } ,
    {
        id : 3 ,
        name : 'Portfolio' ,
        path : '/#portfolio'
    } ,
    {
        id : 4 ,
        name : 'Blogs' ,
        path : '/blogs'
    } ,
    {
        id : 5 ,
        name : 'Locations' ,
        path : '/locations' ,
        group : 'company' ,
        description : 'Where we are based and who we serve'
    } ,
    {
        id : 6 ,
        name : 'Contact Us' ,
        path : '/contact' ,
        group : 'primary' ,
        description : 'Send us a message, we reply within 24 hours'
    } ,
]

// Desktop navbar folds About Us and Locations into "Company"; Contact Us stays directly visible.
export const companyLinks = navLinks.filter(link => link.group === 'company')

export default navLinks;
