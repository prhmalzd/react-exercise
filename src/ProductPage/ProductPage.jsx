import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { http } from "../Fetch/fetchProducts"

function ProductPage () {
    const [info , setInfo] = useState({
        "_id": "6748dfa3c9017c78628d4a95",
        "name": "Licensed Garden Tools",
        "description": "New Tuna model with 21 GB RAM, 546 GB storage, and frightened features",
        "price": 229.90345895241273,
        "stock": 3,
        "category": {
            "_id": "6748dfa3c9017c78628d4a8d",
            "name": "Home & Garden"
        }
    })

    const { productId } = useParams()

    useEffect (() => {
        let ignore = false
        
        if (!ignore) {
            fetchProduct(productId)
        }
        return () => {
          ignore = true
        }
    } , [])

    function fetchProduct (id) {
        console.log('here')
        let url = `https://kaaryar-ecom.liara.run/v1/products/${id}`
        http(url)
        .then(data => {
            setInfo(data)
            console.log(data)
        })
        .catch(err => {
          // error handler
        })
        .finally(() => {
          // loading handler
        })
      }

    return (
        <div className='product'>
            {/* <img className='product-img' src={info.images[0]}/> */}
            <div className='product-info'>
              <span className='product-category'>{info.category.name}</span>
              <span className='product-name'>{info.name}</span>
              <span className='product-price'>{Math.floor(info.price)}</span>
              <span className='product-rating'></span>
            </div>
            <div className='product-icons'>
              <div className='icon'></div>
              <div className='icon'></div>
              <div className='icon'></div>
            </div>
        </div>
    )
}

export default ProductPage