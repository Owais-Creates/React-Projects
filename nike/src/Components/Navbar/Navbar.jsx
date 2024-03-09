import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>

                <div className="image">
                    <img src="/images/brand_logo.png" alt="" />
                </div>

                    <ul className="list-items">
                        <li><a href="">MENU</a></li>
                        <li><a href="">LOCATION</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
    
                <button className='login-btn'>Login</button>

            </nav>
        </>
    )
}

export default Navbar
