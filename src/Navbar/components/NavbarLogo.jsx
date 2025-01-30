import './NavbarComponents.css'
import { useNavigate } from 'react-router'

function NavbarLogo ({setPath}) {

    const navigate = useNavigate()
    
    function navBarLogoClicked () {
        navigate(`./`)
        setPath('All Categories')
    }

    return (
        <div className='navbar-logo' onClick={navBarLogoClicked}>Electro</div>
    )
}

export default NavbarLogo