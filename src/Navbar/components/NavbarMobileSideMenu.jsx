import './NavbarComponents.css'
import { useNavigate } from 'react-router'
import {closeIconNight, closeIconDay } from '../../icons/Icons'

function NavbarMobileSideMenu ({toggleMenu, isLight}) {

    const navigate = useNavigate()
    
    function onClickNavigate (e) {
        const id = e.target.id
        if (id == 'home') {
            navigate(`./`)
        }
        else if (id == 'login') {
            navigate(`./login`)
        }
        toggleMenu()
    }

    return (
        <div className='sideMenu'>
            <div className='closeMenu' onClick={toggleMenu}>{isLight ? closeIconNight : closeIconDay}</div>
            <div className='menuOptions'>
                <span id='home' onClick={onClickNavigate}>Home</span>
                <span>Categories</span>
                <span>Cart</span>
                <span>Contact us</span>
                <span id='login' onClick={onClickNavigate}>Login</span>
            </div>
        </div>
    )
}

export default NavbarMobileSideMenu