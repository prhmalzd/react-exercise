import { useEffect, useState } from 'react'
import { http } from '../../Fetch/fetchProducts'
import './Sidebar.css'

const brands = ['Samsung' , 'LG' , 'Sony' , 'Samsung' , 'LG' , 'Sony']

function Sidebar ({products , fetchProducts}) {
    const [categories , setCategories] = useState([])

    useEffect(() => {
        let ignore = false
        // loading handler
        http('https://kaaryar-ecom.liara.run/v1/categories')
        .then(data => {
        if (!ignore) {
            setCategories(data)
        }
        })
        .catch(err => {
        // error handler
        })
        .finally(() => {
        // loading handler
        })
        return () => {
        ignore = true
        }
    } , [])

    function selectedHandler (event) {
        let id = event.target.id

        if (!event.target.checked) {
            id = undefined
        }
        fetchProducts(id)
    }

    const categories_items = categories.map((cate , index) => {
        return (
            <li key={cate._id}>
                <label htmlFor={cate.name} >
                    <input id={cate._id} type='checkbox' name={cate.name} onChange={selectedHandler}/>
                    {cate.name}
                </label>
            </li>
        )
    })
    const brands_items = brands.map((brand , index) => {
        return (
            <li key={brand + index}>
                <label htmlFor={brand} >
                    <input type='checkbox' name={brand}/>
                    {brand}
                </label>
            </li>
        )
    })

    const topSelling_products = products.map((product , index) => {
        if (index < 3) {
            return (
                <div className='topSelling-product' key={product._id}>
                    <img src={product.images[0]}/>
                    <div className='topSelling-info'>
                        <span className='categoryName'>{product.category.name}</span>
                        <span className='productName'>{product.name}</span>
                        <span className='productPrice'>{Math.floor(product.price)}</span>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className='sidebar-container'>
            <div className='categories'>
                <span className='title'>CATEGORIES</span>
                <ul>{categories_items}</ul>
            </div>
            <div className='price'>
                <span className='title'>PRICE</span>
                <div className='range-container'>
                    <label>Min: </label>
                    <input type='number' min={0}/>
                    <label>Max: </label>
                    <input type='number'/>
                </div>
            </div>
            <div className='brand'>
                <span className='title'>BRAND</span>
                <ul>{brands_items}</ul>
            </div>
            <div className='topSellingContainer'>
                <span className='title'>TOP SELLING</span>
                <div className='topSelling'>{topSelling_products}</div>
            </div>
        </div>
    )
}

export default Sidebar