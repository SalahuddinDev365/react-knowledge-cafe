
import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/BookMarks';
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id,time) => {
     setReadingTime(readingTime + time);
     const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
     setBookmarks(remainingBookmark)
  }
  

  return (
    <>
     
      <Header></Header>

      <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBookmark= {handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
