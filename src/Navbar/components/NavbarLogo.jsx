import './NavbarComponents.css'
import { useNavigate } from 'react-router'

function NavbarLogo () {

    const navigate = useNavigate()

    return (
        <div className='navbar-logo' onClick={() => navigate(`./`)}>Electro</div>
    )
}

export default NavbarLogo