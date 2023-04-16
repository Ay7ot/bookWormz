import {useState} from 'react'
import {FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'
import { useAuth } from '../AppContext'
import Loader3 from './Loader3'

export default function Footer() {

    const [loading, setLoading] = useState(false)
    const {email, dispatch} = useAuth()
    function subscribe(){
        setLoading(true)
        setTimeout(()=>{
            dispatch({
                type: 'setNoEmail'
            })
            setLoading(false)
        }, 3000)
    }
    return (
        <footer id='footer'>
            <div className='innerFooter'>
                <h2>Sign up to our newsletter to receive updates</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia repellendus molestiae ipsum libero optio, dolores, doloremque iure enim similique eveniet eius nesciunt omnis iste. Voluptatum aspernatur velit alias totam.</p>
                <div className='loaderForm'>
                    {loading ? <Loader3 /> :
                    <form onSubmit={(e)=>{e.preventDefault(); subscribe()}}>
                        <input 
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>{
                                dispatch({
                                    type: 'setEmail',
                                    payload: {
                                        emailPayload: e.target.value
                                    }
                                })
                            }}
                        />
                        <button>Subscribe</button> 
                    </form>
                    }
                </div>
                <div className='footerButtons'>
                    <a target='_blank' href="https://instagram.com/ayomidotzee"><FaInstagram /></a>
                    <a target='_blank' href="https://github.com/Ay7ot"><FaGithub /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/ayomide-ibiteye-b124b823b/"><FaLinkedin /></a>
                    <a target='_blank' href="https://twitter.com/Ay7ot"><FaTwitter /></a>
                </div>
            </div>
        </footer>
    )
}
