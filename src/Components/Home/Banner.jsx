import banner from '../../assets/banner.jpg'
import Newsletter from './Newsletter';
import RecentBlog from './RecentBlog';
const Banner = () => {
    return (
        <div className=' mb-14 mt-12'>
            <img src={banner} className='lg:h-[850px]  opacity-40 w-full' alt="" />
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Banner;