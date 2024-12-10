import { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router'

const lists = ['Home' , 'Hot Deals' , 'Categories' , 'Laptops' , 'Smartphones' , 'Cameras' , 'Accessories']

function Navbar ({searchHandler}) {
    const [searchInput , setSearchInput] = useState('')
    const navigate = useNavigate()

    const liItmes = lists.map(li => <li key={li}>{li}</li>)

    function searchChangeHandler (e) {
        let value  = e.target.value
        setSearchInput(value)
    }

    function searchSubmitHandler () {
        searchHandler(searchInput)
    }


    return (
        <nav className='navbar'>
            <div className='navbar-information'>
                <div className='address-section'>
                    <div>+021-95-51-84</div>
                    <div>email@gmail.com</div>
                    <div>1734 Stonecoal Road</div>
                </div>
                <div className='auth-section'>
                    <div>USD</div>
                    <div onClick={() => navigate(`./login`)}>Login</div>
                </div>
            </div>
            <div className='navbar-middle'>
                <div className='logo'>Electro</div>
                <div className='search-section'>
                    <select className='navbar-select'>
                        <option>All Categories</option>
                    </select>
                    <input className='input-search' type='search' placeholder='Search here...' onChange={searchChangeHandler}/>
                    <button className='navbar-btn' onClick={searchSubmitHandler}>search</button>
                </div>
                <div className='card-section'>
                    <div className='wishlist'>Wishlist</div>
                    <div className='cart'>Cart</div>
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
                <span>Accessories</span>
            </div>
        </nav>
    )
}

export default Navbar