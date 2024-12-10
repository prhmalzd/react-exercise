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
            <div className='navbar-searchContainer'>
                <select className='navbar-select'>
                    <option>All Categories</option>
                </select>
                <input className='navbar-search' type='search' placeholder='Search here...' onChange={searchChangeHandler}/>
                <button className='navbar-btn' onClick={searchSubmitHandler}>search</button>
            </div>
            <div className='navbar-menu'>
                <ul>
                    {liItmes}
                </ul>
            </div>
            <div>
                <span  onClick={() => navigate(`./login`)}>Login</span>
            </div>
        </nav>
    )
}

export default Navbar