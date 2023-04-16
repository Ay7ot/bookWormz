import { useEffect, useState } from "react"
import Loader from "./Loader"
import Body from "./Body"
import {useAuth} from '../AppContext'
import { Route, Routes } from "react-router-dom"
import BookPage from "./BookPage"
import Header from "./Header"
import Bookshelf from "./Bookshelf"

function App() {

  const [loading, setLoading] = useState(false)
  const { dispatch, books } = useAuth()

  useEffect(()=>{
    setLoading(true)
    fetch(`https://www.dbooks.org/api/recent`)
      .then(res=>res.json())
      .then(data=>{
        dispatch({
          type: 'setBooks',
          payload: {
            booksPayload: data.books
          }
        })
      })
      .catch(err=>console.error(err))
      .finally(()=>{
        setTimeout(()=>{
          setLoading(false)
        }, 1000)
      })
  },[])

  return (
    <div className="App">
      {loading ? <Loader /> :
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/header" element={<Header />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Route>
          <Route path="/boardpage" element={<BookPage />} />
        </Routes>
      }
    </div>
  )
}

export default App
