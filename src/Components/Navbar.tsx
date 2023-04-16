import {GiBookshelf} from 'react-icons/gi'
import {HiHomeModern} from 'react-icons/hi2'
import {TiContacts} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate()

  const scrollToSection = (id: string, offset = -70) => {
    
    navigate('/')
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
          <li onClick={()=>{scrollToSection('header')}}  className='navItems'>
            <i><TiContacts /></i>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}