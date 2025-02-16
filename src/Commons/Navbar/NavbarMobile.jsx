import { useState } from 'react'
import NavbarCart from '../NavbarComponents/NavbarCart'
import NavbarSearch from '../NavbarComponents/NavbarSearch'
import HumburgurMenu from '../NavbarComponents/HumburgurMenu'
import './Navbar.css'
import NavbarLogo from '../NavbarComponents/NavbarLogo'

const hamburgerIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>

function NavbarMobile({cartData , changeQuery}) {
  const [showHumburger , setShowHumburger] = useState(false)

  function toggleHumburger () {
    setShowHumburger(showHumburger => !showHumburger)
  }

  return (
    <>
      <nav className='navbarMobile'>
        <div className='humburgerMenuToggleIcon' onClick={toggleHumburger}>
          {hamburgerIcon}
        </div>
        <div className='leftNavbar'>
          <NavbarLogo/>
        </div>
        <div className='rightNavbar'>
          <NavbarSearch changeQuery={changeQuery}/>
          <NavbarCart cartData={cartData}/>
        </div>
        {showHumburger && <HumburgurMenu toggleHumburger={toggleHumburger}/>}
      </nav>
    </>
  )
}

export default NavbarMobile
