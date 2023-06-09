import { FaBars } from 'react-icons/fa'
import {GiBookshelf} from 'react-icons/gi'
import {HiHomeModern} from 'react-icons/hi2'
import {TiContacts} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AppContext'
import NavToggled from './NavToggled'

export default function Navbar() {

  const navigate = useNavigate()
  const {dispatch, } = useAuth()
  
  const scrollToSection = (id: string, offset = -70) => {
    
    if(id !== 'footer'){
      navigate('/')
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    
  }

  function openNav(){
    dispatch({
      type: 'setNavToggledTrue'
    })
  }
  

  return (
    <div className='navbar'>
      <p className='navname'>Book<span>Wormz</span></p>
      <nav className='mainNav'>
        <ul className='navlist'>
          <li onClick={()=>{scrollToSection('header')}} className='navItems'>
            <i><HiHomeModern /></i>
            <p>Home</p>
          </li>
          <li onClick={()=>{scrollToSection('bookshelf')}} className='navItems'>
            <i><GiBookshelf /></i>
            <p>Bookshelf</p>
          </li>
          <li onClick={()=>{scrollToSection('footer')}}  className='navItems'>
            <i><TiContacts /></i>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
      <div className='toggleIcon' onClick={(e)=>{e.stopPropagation(); openNav()}}>
        <i><FaBars /></i>
      </div>
      <NavToggled />
    </div>
  )
}