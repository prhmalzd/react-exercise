import { useEffect, useState } from 'react'
import { http } from '../../Fetch/fetchProducts'
import './Sidebar.css'
import PropTypes from 'prop-types'

const brands = ['Samsung' , 'LG' , 'Sony' , 'Samsung' , 'LG' , 'Sony']


Sidebar.propTypes = {
    products : PropTypes.array,
    fetchProducts : PropTypes.func
}

function Sidebar ({products , fetchProducts ,  setPath}) {
    const [categories , setCategories] = useState([])
    const [selectedCateId , setSelectedCateId] = useState('')

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

    function categoryClickedHandler (event) {
        let id = event.target.id
        if (selectedCateId === id) {
            id = ''
        }
        fetchProducts(id)
        setSelectedCateId(id)
        setPath(event.target.textContent)
    }

    const categories_items = categories.map((cate) => {
        return (
            <button id={cate._id} className={`${cate._id === selectedCateId && 'selectedCateBtn'}`} key={cate._id} onClick={categoryClickedHandler}>{cate.name}</button>
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
                <div>
                <button onClick={categoryClickedHandler}>All Categories</button>
                    {categories_items}
                </div>
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