import PropTypes from 'prop-types';
import { PiBookmarksThin } from "react-icons/pi";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {title, cover, author, author_image, reading_time, posted_date, hashtag, id} = blog;
    return (
        <div className='mb-16 ml-4'>
            
            <img className='w-full rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center py-4'>
                <div className='flex'>
                    <img className='w-14' src={author_image} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-semibold'>{author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl text-black '> <PiBookmarksThin></PiBookmarksThin> </button>
                </div>
            </div>
            <h2 className='text-3xl font-bold pb-2'>{title}</h2>
            <p>
            {
                hashtag.map((hash, index) => <span key={index}><a href="">{hash}</a></span>)
            }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time) } className='pt-2 text-blue-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
    
}

export default Blog;