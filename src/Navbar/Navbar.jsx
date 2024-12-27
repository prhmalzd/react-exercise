import { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router'
import { sunIcon , moonIcon, menuIconDay, menuIconNight, cartNight, cartDay, closeIconNight, closeIconDay } from '../icons/Icons'

const lists = ['Home' , 'Hot Deals' , 'Categories' , 'Laptops' , 'Smartphones' , 'Cameras' , 'Accessories']

let debounceTimerForSearch

function Navbar ({searchHandler , changeTheme}) {
    const [isLight , setIsLight] = useState(true)
    const [isMenuOpen , setIsmenuOpen] = useState(false)

    const navigate = useNavigate()

    const liItmes = lists.map(li => <li key={li}>{li}</li>)

    function searchChangeHandler (e) {
        let value  = e.target.value
        debounce(value)
    }

    function debounce (searchInput) {
        clearTimeout(debounceTimerForSearch)
        
        debounceTimerForSearch = setTimeout(() => {
            searchHandler(searchInput)
        } , 800)
    }

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
                <div className='navbar-middle'>
                    <div className='logo' onClick={() => navigate(`./`)}>Electro</div>
                    <div className='search-section'>
                        <input className='input-search' type='search' placeholder='Search here...' onChange={searchChangeHandler}/>
                    </div>
                    <div className='card-section'>
                        <div className='lightdarkbtn' onClick={changeThemeHandler}>{isLight ? sunIcon : moonIcon}</div>
                        {isLight ? cartNight : cartDay}
                        <button className='loginbtn' onClick={() => navigate(`./login`)}>Login</button>
                    </div>
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
                    <div className='navbar-mobile-auth'>
                        <div className='lightdarkbtn' onClick={changeThemeHandler}>{isLight ? sunIcon : moonIcon}</div>
                        {isLight ? cartNight : cartDay}
                        <button className='loginbtn' onClick={() => navigate(`./login`)}>Login</button>
                    </div>
                </div>
                <div className='logo' onClick={() => navigate(`./`)}>Electro</div>
                <input className='input-search-mobile' type='search' placeholder='Search here...' onChange={searchChangeHandler}/>
                {isMenuOpen && <div className='sideMenu'>
                    <div className='closeMenu' onClick={toggleMenu}>{isLight ? closeIconNight : closeIconDay}</div>
                    <div className='menuOptions'>
                        <span onClick={() => navigate(`./`)}>Home</span>
                        <span>Categories</span>
                        <span>Cart</span>
                        <span>Contact us</span>
                        <span onClick={() => navigate(`./login`)}>Login</span>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Navbar