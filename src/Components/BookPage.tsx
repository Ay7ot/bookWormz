import React from 'react'
import { useLocation } from 'react-router-dom'
import { bookInfo } from '../type'
import Navbar from './Navbar'
import { useAuth } from '../AppContext'
import Loader from './Loader'
import Footer from './Footer'

export default function BookPage() {
    const location = useLocation()
    const data: bookInfo = location.state
    const {currentBook, navToggled} = useAuth();

    if(!currentBook || currentBook.id !== data.id){
        return <Loader />
    }

    function BookInfo() {
        return (
            <div className='bookInfo'>
                <img 
                    src={currentBook?.image}
                />
                <div className='bookInfoMain'>
                    <h2 className='bookTitle'>{currentBook?.title}</h2>
                    <h4 className='bookAuthor'>{`${currentBook?.authors}`} <span className='bookYear'>{currentBook?.year}</span></h4>
                    <p className='bookDescription'>{currentBook?.description}</p>
                    <div className='bookbuttons'>
                        <a target='_blank' href={currentBook?.url} className='readButton'>Read Here</a>
                        <a target='_blank' href={currentBook?.download} className='downloadButton'>Download here</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='noScroll'>
            <Navbar />
            <BookInfo />
            <Footer />
        </div>
    )
}
