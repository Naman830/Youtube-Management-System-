import React from 'react'
import {Link} from "react-router-dom"

import Logo from "../../../assets/logo/Youtube_logo.png"

const Navbar = () => {
  return (
    <nav className="navbar_container w-full py-5 fixed bg-black text-white" >
        <div className="navbar flex justify-between items-center mx-16">
            <div className="navbar_logo flex items-center gap-2">
                <figure className='w-12 '>
                    <img src={Logo} alt="navbar logo" className='img'/>
                </figure>
                <h2 className='text-[22px] leading-6 font-bold'>CREATORSTUDIO</h2>
            </div>

            <div className="navbar_cta flex items-center gap-8">
                <Link to="/" className='text-[16px] font-medium leading-5'>Log In</Link>
                <Link to="/" className='btn_primary'>Sign Up Free</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar