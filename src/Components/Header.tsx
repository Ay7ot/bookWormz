import React, { useState } from 'react'
import { useAuth } from '../AppContext'
import Loader2 from './Loader2'

export default function Header() {

    const [loading, setLoading] = useState(false)
    const {query, dispatch, error, isLoaded} = useAuth()

    async function handleSearch(){
        setLoading(true)
        if(query === ''){
            dispatch({
                type: 'setError',
                payload: {
                    errorPayload: 'Input a search query'
                }
            })
        } else {
            const element = document.getElementById('bookshelf');
            if (element) {
              const y = element.getBoundingClientRect().top + window.pageYOffset + -60;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }

            dispatch({
                type: 'setSearchLoadTrue'
            })
            await fetch(`https://www.dbooks.org/api/search/${query}`)
                .then(res=>res.json())
                .then(data => {
                    dispatch({
                        type: 'setBooks',
                        payload: {
                            booksPayload: data.books
                        }
                    })
                })
                .catch(err => {
                    console.error(err)
                })
                .finally(()=>{
                    dispatch({
                        type: 'setNoQuery'
                    })
                   
                })
            dispatch({
                type: 'setSearchLoadFalse'
            })
        }
        
        setLoading(false)
    }

    return (
        <header className='header' id='header'>
        <img
            onLoad={()=>{
                setTimeout(()=>{
                    dispatch({
                        type: 'setImageLoaded'
                    })
                }, 500)
            }}
            src='headerImg.png'
            alt='Cartoon image of a woman sitting and reading'
        />
        {isLoaded ? 
            <div className='headerInfo'>
            <form onSubmit={(e)=>{e.preventDefault(); handleSearch();}}>
                <input 
                    type='text'
                    value={query}
                    onChange={(e)=>{
                        dispatch({
                            type: 'setError',
                            payload: {
                                errorPayload : ''
                            }
                        })
                        dispatch({
                            type: 'setQuery',
                            payload: {
                                queryPayload: e.target.value
                            }
                        })
                    }}
                />
                <button disabled={loading}>Search</button>
            </form>
            {error !== '' && <p className='errorMessage'>Required</p>}
            <h2>Search your favorite book!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum corrupti repellendus. Suscipit at praesentium voluptatem ex debitis eligendi error iusto temporibus nostrum, provident possimus rerum minima esse. Sunt, doloremque.</p>
        </div> : <Loader2 />
        }
        </header>
    )
}
