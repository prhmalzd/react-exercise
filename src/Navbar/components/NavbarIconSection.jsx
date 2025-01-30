import './NavbarComponents.css'
import { sunIcon , moonIcon, cartNight, cartDay } from '../../icons/Icons'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import ProductsInCard from './ProductsInCard'

function NavbarIconSection ({changeThemeHandler , isLight , changeCard}) {
    const [cardAmount , setCardAmount] = useState()
    const [showProductModule , setShowProductModule] = useState(false)
    const [productsInfo , setProductsInfo] = useState([])

    useEffect(() => {
        setCardAmount(changeCard)
    } , [changeCard])

    const navigate = useNavigate()

    function showProductsInCard () {
        setShowProductModule(showProductModule => !showProductModule)
        const items = JSON.parse(localStorage.getItem('items'))
        setProductsInfo(items)
    }

    return (
        <div className='navbar-icon-section'>
            <div className='lightdarkbtn' onClick={changeThemeHandler}>{isLight ? sunIcon : moonIcon}</div>
            <div className='cardCountainer'>
                <div className='cardIcon' onClick={showProductsInCard}>{isLight ? cartNight : cartDay}</div>
                <div className='cartAmount'>{cardAmount}</div>
                {(showProductModule && productsInfo.length > 0) &&
                        <div className='showProductsInCardModule'>
                            {
                                productsInfo.map((item)=> {
                                    return <ProductsInCard info={item} key={item.info._id}/>
                                })
                            }
                            <button className='purchaseInCard'>Purchase</button>
                        </div>
                }
            </div>
            <button className='loginbtn' onClick={() => navigate(`./login`)}>Login</button>
        </div>
    )
}

export default NavbarIconSection