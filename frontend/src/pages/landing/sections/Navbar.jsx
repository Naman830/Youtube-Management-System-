import React from 'react'
import {Link} from "react-router-dom"

import Logo from "../../../assets/logo/youtubeLogo.png"

const Navbar = () => {
  return (
    <nav className="navbar_container w-full py-5 fixed bg-black text-white" >
        <div className="navbar flex justify-between items-center mx-10">
            <div className="navbar_logo flex items-center gap-2">
                <figure className='w-20 '>
                    <img src={Logo} alt="navbar logo" className='img'/>
                </figure>
                <h2>CREATORSTUDIO</h2>
            </div>

            <div className="navbar_cta">
                <Link to="/">Log In</Link>
                <Link to="/">Sign Up Free</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar