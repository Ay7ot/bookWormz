import {useEffect} from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Bookshelf from './Bookshelf'
import Footer from './Footer'
import { useAuth } from '../AppContext'

export default function Body() {
  const {navToggled, dispatch} = useAuth()

  useEffect(()=>{
    dispatch({
      type: 'setNavToggledFalse'
    })
  },[])
  return (
    <div className={navToggled ? ' noScroll' : ''}>
      <Navbar />
      <Header />
      <Bookshelf />
      <Footer />
    </div>
  )
}
