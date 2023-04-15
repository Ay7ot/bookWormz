import { useEffect, useState } from "react"
import Loader from "./Loader"
import Body from "./Body"
import {useAuth} from '../AppContext'

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
        {loading ? <Loader /> : <Body />}
      </div>
  )
}

export default App
