const { FacebookSvg, InstaSvg, TwitterSvg, LinkedInSvg } = require("@/assets/svgs");

const socialLinks = [
    {
        id : 1 ,
        name : 'Facebook' ,
        url : 'https://facebook.com' ,
        icon : FacebookSvg
    } ,
    {
        id : 2 ,
        name : 'Instagram' ,
        url : 'https://instagram.com' ,
        icon : InstaSvg
    } ,
    {
        id : 3 ,
        name : 'Twitter' ,
        url : 'https://twitter.com' ,
        icon : TwitterSvg
    } ,
    {
        id : 4 ,
        name : 'Linked In' ,
        url : 'https://linkedin.com' ,
        icon : LinkedInSvg
    } ,
]

export default socialLinks;