import { useState } from 'react'
import NavbarCart from '../NavbarComponents/NavbarCart'
import NavbarSearch from '../NavbarComponents/NavbarSearch'
import HumburgurMenu from '../NavbarComponents/HumburgurMenu'
import './Navbar.css'
import NavbarLogo from '../NavbarComponents/NavbarLogo'

function NavbarMobile({cartData , changeQuery}) {
  const [showHumburger , setShowHumburger] = useState(false)

  function toggleHumburger () {
    setShowHumburger(showHumburger => !showHumburger)
  }

  return (
    <>
      <nav className='navbarMobile'>
      <div className='humburgerMenuToggleIcon' onClick={toggleHumburger}></div>
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
