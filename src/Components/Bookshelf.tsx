import React from 'react'
import { useAuth } from '../AppContext'

export default function Bookshelf() {
    const { books } = useAuth()
  return (
    <section className='bookshelf'>
        <h2>Recently Added</h2>
        <div className='bookgrid'>
            {books.map(book => {
                return (
                    <div>
                        <img 
                            src={book.image}
                        />
                        <h3>{book.title}</h3>
                        <p>{book.authors}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
