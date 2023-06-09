import {useEffect, useRef} from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'
import { HiHomeModern } from 'react-icons/hi2'
import { TiContacts } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AppContext'

export default function NavToggled() {
    
    const navigate = useNavigate();
    const {dispatch, navToggled} =  useAuth()
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                dispatch({
                    type: 'setNavToggledFalse'
                })
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, [modalRef, navToggled]);

    const scrollToSection = (id: string, offset = -70) => {
        if(id !== 'footer'){
            dispatch({
                type: 'setNavToggledFalse'
            })
            navigate('/')
            const element = document.getElementById(id);
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
            
        } else {
            dispatch({
                type: 'setNavToggledFalse'
            })
            const element = document.getElementById(id);
            if (element) {
                const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    
    }

    function closeNav(){
        dispatch({
            type: 'setNavToggledFalse'
        })
    }
  
    return (
        <div ref={modalRef} className={navToggled ? 'navToggled' : 'navNone'}>
            <button className='toggledButton' onClick={(e)=>{e.stopPropagation(); closeNav()}}><FaTimes /></button>
            <nav className='toggled-nav'>
                <ul>
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
        </div>
    )
}
