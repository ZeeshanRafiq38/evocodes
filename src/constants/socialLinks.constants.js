const { FacebookSvg, InstaSvg, TwitterSvg, LinkedInSvg } = require("@/assets/svgs");

const socialLinks = [
    {
        id : 1 ,
        name : 'Facebook' ,
        url : 'https://www.facebook.com/evocodes.llc' ,
        icon : FacebookSvg
    } ,
    {
        id : 2 ,
        name : 'Instagram' ,
        url : 'https://www.instagram.com/evocodes.llc/' ,
        icon : InstaSvg
    } ,
    {
        id : 3 ,
        name : 'Twitter' ,
        url : 'https://x.com/evocodesllc' ,
        icon : TwitterSvg
    } ,
    {
        id : 4 ,
        name : 'Linked In' ,
        url : 'https://www.linkedin.com/in/adsandcode/' ,
        icon : LinkedInSvg
    } ,
]

export default socialLinks;