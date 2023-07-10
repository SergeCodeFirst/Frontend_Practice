import { useState } from 'react'
import './navbar.css'

const Navbar = (props) => {
    const [navon, setNavon] = useState(false)
    
    const toogleNav = () => {
        setNavon(!navon);
    }

    return <div>
        <nav>
            <section className='nav-container section'>
                <h1 className='nav-title'>Hello</h1>
                <div className={navon? "nav-links open" : "nav-links"}>
                    <ul>
                        <i className="fa-solid fa-xmark nav-close-icon" onClick={toogleNav}></i>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Collections</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <button className="btn btn-2">Login</button>
                    </ul>
                    <button className="btn btn-1">Login</button>
                </div>
                <i class="fa-solid fa-bars nav-open-icon" onClick={toogleNav} ></i>
            </section>
        </nav>
    </div>
}

export default Navbar;