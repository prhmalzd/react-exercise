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

function Navbar ({changeTheme , changeCard , pathName , setPath}) {
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
                    <NavbarLogo setPath={setPath}/>
                    <NavbarSearch setPath={setPath}/>
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
                    <span>{pathName}</span>
                </div>
            </nav>
            <div className='navbar-mobile'>
                <div className='navbar-mobile-icons'>
                    <div className='openMenubtn' onClick={toggleMenu}>{isLight ? menuIconNight : menuIconDay}</div>
                    <NavbarLogo setPath={setPath}/>
                    <NavbarIconSection changeThemeHandler={changeThemeHandler} isLight={isLight} changeCard={changeCard}/>
                </div>
                <NavbarSearch onMobile={true}/>
                <div className='path-section'>
                    <span>Home /</span>
                    <span>All Categories /</span>
                    <span>{pathName}</span>
                </div>
                {isMenuOpen && <NavbarMobileSideMenu toggleMenu={toggleMenu} isLight={isLight}/>}
            </div>
        </>
    )
}

export default Navbar