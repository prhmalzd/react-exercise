import './Navbar.css'

const lists = ['Home' , 'Hot Deals' , 'Categories' , 'Laptops' , 'Smartphones' , 'Cameras' , 'Accessories']

function Navbar () {

    const liItmes = lists.map(li => <li key={li}>{li}</li>)

    return (
        <nav className='navbar'>
            <div className='navbar-searchContainer'>
                <select className='navbar-select'>
                    <option>All Categories</option>
                </select>
                <input className='navbar-search' type='search' placeholder='Search here...'/>
                <button className='navbar-btn'>search</button>
            </div>
            <div className='navbar-menu'>
                <ul>
                    {liItmes}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar