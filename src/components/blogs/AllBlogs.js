import Axios from '@/config/api';
import PrimaryBlog from './PrimaryBlog';
import Blog from './Blog';


export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const fetchBlogs = async () => {
    try {
        const { data : { data : { docs } } } = await Axios(`/blog`);
        return docs
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw new Error("Could not fetch blogs. Please try again later."); // Optionally throw a user-friendly error
    }
};

const AllBlogs = async () => {
    const blogs = await fetchBlogs();

    return (
        <div>
            <div className='bg-gray-100 rounded-md py-4 px-4'>
                <PrimaryBlog blog={blogs[0]} />
            </div>
            <div className='sm:mt-16 mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8'>
                {blogs?.slice(1).map((blog, index) => (
                    <Blog key={blog?._id} blog={blog} /> // Pass the blog data as props
                ))}
            </div>
        </div>
    )
}

export default AllBlogs