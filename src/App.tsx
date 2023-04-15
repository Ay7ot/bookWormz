

function App() {

  async function fetchBooks(){
    await fetch('https://www.dbooks.org/api/recent')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
      .catch(err=>console.error(err))
  }

  return (
    <div className="App">
      <button type="button" onClick={fetchBooks}>Get books</button>
    </div>
  )
}

export default App
