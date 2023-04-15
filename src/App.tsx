import { useEffect, useState } from "react"
import Loader from "./Loader"
import Body from "./Body"

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetch(`https://www.dbooks.org/api/recent`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
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
