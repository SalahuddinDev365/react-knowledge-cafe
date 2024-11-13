import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ml-4">
            <div>
                <h2 className="text-2xl font-bold p-4 bg-red-100 rounded-lg mt-4">Reading Time: {readingTime}</h2>
            </div>
            <h1 className="text-2xl font-bold ">Bookmarks: {bookmarks.length}</h1>

            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes= {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number 
}
export default Bookmarks;