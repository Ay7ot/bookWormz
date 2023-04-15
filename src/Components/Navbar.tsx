import {IoMdHeartEmpty} from 'react-icons/io'
import {SiCodeproject} from 'react-icons/si'
import {HiCircleStack} from 'react-icons/hi2'
import {TiContacts} from 'react-icons/ti'

export default function Navbar() {

  return (
    <div className='navbar'>
        <p className='navname'>Book<span>Wormz</span></p>
        <nav className='mainNav'>
            <ul className='navlist'>
              <a href='#header' className='navItems'>
                  <i><IoMdHeartEmpty /></i>
                  <p>Home</p>
              </a>
              <a href='#projects' className='navItems'>
                  <i><SiCodeproject /></i>
                  <p>Projects</p>
              </a>
              <a href='#techstack' className='navItems'>
                  <i><HiCircleStack /></i>
                  <p>TechStack</p>
              </a>
              <a href='#contact' className='navItems'>
                  <i><TiContacts /></i>
                  <p>Contact</p>
              </a>
            </ul>
        </nav>
    </div>
  )
}