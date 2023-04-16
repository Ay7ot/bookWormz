import { useAuth } from '../AppContext'
import {Link} from 'react-router-dom'
import Loader2 from './Loader2'

export default function Bookshelf() {
    const { books, searchLoad, dispatch, isLoaded } = useAuth()

    const style = {
        textDecoration: 'none'
    }

    async function setCurrentBook(id: string){
        dispatch({
            type: 'setSearchLoadTrue'
        })
        dispatch({
            type: 'setNavToggledFalse'
        })
        await fetch(`https://www.dbooks.org/api/book/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            dispatch({
                type: 'setCurrentBook',
                payload: {
                    currentBookPayload: data
                }
            })
        })
        .catch(err=>console.error(err))
        .finally(()=>{
            dispatch({
                type: 'setSearchLoadFalse'
            })
        })
    }

    function DisplayedBooks() {
        if(books.length > 0) {
            return (
                <div className='bookgrid'>
                    {books.map(book => {
                        return (
                            <div key={book.id} onClick={()=>{setCurrentBook(book.id)}}>
                                <Link style={style} to='/boardpage' state={book}>
                                    <img 
                                        src={book.image}
                                    />
                                    <h3>{book.title}</h3>
                                    <p >{book.authors}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className='no-result'>
                    <img 
                        src='no-result-found.webp'
                        alt='An image showing no result found'
                    /> 
                </div>
            )
        }
    }
    
    return (
        <section className='bookshelf' id='bookshelf'>
            {isLoaded ?
             <>
                <h2>Books</h2>
                {searchLoad ? 
                    <Loader2 /> : 
                    <DisplayedBooks />
                }
            </> : 
            <Loader2 />
            }
        </section>
    )
}
