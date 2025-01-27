import './NavbarComponents.css'
import { sunIcon , moonIcon, cartNight, cartDay } from '../../icons/Icons'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'

function NavbarIconSection ({changeThemeHandler , isLight , changeCard}) {
    const [cardAmount , setCardAmount] = useState()

    useEffect(() => {
        setCardAmount(changeCard)
    } , [changeCard])

    const navigate = useNavigate()

    return (
        <div className='navbar-icon-section'>
            <div className='lightdarkbtn' onClick={changeThemeHandler}>{isLight ? sunIcon : moonIcon}</div>
            <div className='cardCountainer'>
                <div className='cardIcon'>{isLight ? cartNight : cartDay}</div>
                <div className='cartAmount'>{cardAmount}</div>
            </div>
            <button className='loginbtn' onClick={() => navigate(`./login`)}>Login</button>
        </div>
    )
}

export default NavbarIconSection