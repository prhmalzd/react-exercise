import { useEffect } from 'react'
import './ProductsInCard.css'


function ProductsInCard ({info}) {

    return (
        <div className='onProductInCard'>
            <span>{info.amount}</span>
            <span>X</span>
            <img src={info.info.images[0]} width='50px'/>
            <span>{info.info.name}</span>
        </div>
    )
}

export default ProductsInCard