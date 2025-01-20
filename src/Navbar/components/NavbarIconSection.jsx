import './NavbarComponents.css'
import { sunIcon , moonIcon, cartNight, cartDay } from '../../icons/Icons'
import { useNavigate } from 'react-router'

function NavbarIconSection ({changeThemeHandler , isLight}) {

    const navigate = useNavigate()

    return (
        <div className='navbar-icon-section'>
            <div className='lightdarkbtn' onClick={changeThemeHandler}>{isLight ? sunIcon : moonIcon}</div>
            <div className='cardIcon'>{isLight ? cartNight : cartDay}</div>
            <button className='loginbtn' onClick={() => navigate(`./login`)}>Login</button>
        </div>
    )
}

export default NavbarIconSection