import axios from "axios";


export const baseURL = process.env.NEXT_PUBLIC_API_URL;  

const Axios = axios.create({
    baseURL: `${baseURL}/api`,
});

export default Axios;