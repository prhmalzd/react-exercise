import NavbarCart from '../NavbarComponents/NavbarCart'
import NavbarLogo from '../NavbarComponents/NavbarLogo'
import NavbarPath from '../NavbarComponents/NavbarPath'
import NavbarSearch from '../NavbarComponents/NavbarSearch'
import './Navbar.css'

function Navbar({cartData , changeQuery}) {

  return (
    <>
      <nav className='navbar'>
        <NavbarLogo/>
        <NavbarPath/>
        <div className='rightNavbar'>
          <NavbarSearch changeQuery={changeQuery}/>
          <NavbarCart cartData={cartData}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
