import React, { useState } from 'react'
import { useAuth } from './AppContext'

export default function Header() {

    const [loading, setLoading] = useState(false)
    const {query, dispatch} = useAuth()

    async function handleSearch(){
        setLoading(true)
        await fetch(`https://www.dbooks.org/api/search/${query}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    return (
        <div className='header'>
        <img src='headerImg.png'/>
        <div className='headerInfo'>
            <form onSubmit={(e)=>{e.preventDefault(); handleSearch();}}>
                <input 
                    type='text'
                    value={query}
                    onChange={(e)=>{
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
            <h2>Search your favorite book!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum corrupti repellendus. Suscipit at praesentium voluptatem ex debitis eligendi error iusto temporibus nostrum, provident possimus rerum minima esse. Sunt, doloremque.</p>
        </div>
        </div>
    )
}
