import { Fade as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { Link } from 'react-router-dom'

const NavMenu = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div style={{position: 'fixed', top: '5%', left: '5%', zIndex: '5'}}>
            <Hamburger size={25} toggled={isOpen} toggle={setOpen}></Hamburger>
            {isOpen
                ? <div style={{height: '140px', width: '110px', border: 'solid black 1px', padding: '8px', backgroundColor: 'white'}}>
                    <div className='nav-item'>
                        <Link to="/">Homepage</Link>
                    </div>
                    <div className='nav-item'>
                        <Link to="/timeline">Timeline</Link>
                    </div>
                    <div className='nav-item'>
                        <Link to="/discography">Discography</Link>
                    </div>
                    <div className='nav-item'>
                        <Link to="/about">About</Link>
                    </div>
                    <div className='nav-item'>
                        <Link to="/experiences">Experiences</Link>
                    </div>
                    <div className='nav-item'>
                        <Link to="/syncs-ads">Syncs / Ads</Link>
                    </div>                    
                  </div>
                : <></>
            }
        </div>
    )
}

export default NavMenu