import { useState } from 'react'
import './Navbar.css'
import {menuIconDay, menuIconNight} from '../icons/Icons'
import PropTypes from 'prop-types'
import NavbarIconSection from './components/NavbarIconSection'
import NavbarLogo from './components/NavbarLogo'
import NavbarSearch from './components/NavbarSearch'
import NavbarMobileSideMenu from './components/NavbarMobileSideMenu'

const lists = ['Home' , 'Hot Deals' , 'Categories' , 'Laptops' , 'Smartphones' , 'Cameras' , 'Accessories']

Navbar.propTypes = {
    changeTheme : PropTypes.func
}

function Navbar ({changeTheme , changeCard}) {
    const [isLight , setIsLight] = useState(true)
    const [isMenuOpen , setIsmenuOpen] = useState(false)

    const liItmes = lists.map(li => <li key={li}>{li}</li>)

    function changeThemeHandler () {
        setIsLight(!isLight)
        changeTheme(!isLight)
    }

    function toggleMenu () {
        setIsmenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-main'>
                    <NavbarLogo/>
                    <NavbarSearch/>
                    <NavbarIconSection changeThemeHandler={changeThemeHandler} isLight={isLight} changeCard={changeCard}/>
                </div>
                <div className='navbar-menu'>
                    <ul>
                        {liItmes}
                    </ul>
                </div>
                <div className='path-section'>
                    <span>Home /</span>
                    <span>All Categories /</span>
                </div>
            </nav>
            <div className='navbar-mobile'>
                <div className='navbar-mobile-icons'>
                    <div className='openMenubtn' onClick={toggleMenu}>{isLight ? menuIconNight : menuIconDay}</div>
                    <NavbarIconSection changeThemeHandler={changeThemeHandler} isLight={isLight} changeCard={changeCard}/>
                </div>
                <NavbarLogo/>
                <NavbarSearch onMobile={true}/>
                {isMenuOpen && <NavbarMobileSideMenu toggleMenu={toggleMenu} isLight={isLight}/>}
            </div>
        </>
    )
}

export default Navbar