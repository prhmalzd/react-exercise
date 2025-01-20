import { useEffect, useState } from 'react'
import { http } from '../../Fetch/fetchProducts'
import './FilterSection.css'
import PropTypes from 'prop-types'

const brands = ['Samsung' , 'LG' , 'Sony' , 'Samsung' , 'LG' , 'Sony']

FilterSection.propTypes = {
    categoryIds : PropTypes.string,
    fetchProducts : PropTypes.func
}

function FilterSection ({ categoryIds, fetchProducts}) {
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

    const categories_items = categories.map((cate) => {
        let checked = categoryIds === cate._id
        return (
            <li key={cate._id}>
                <label htmlFor={cate.name} >
                    <input id={cate._id} type='checkbox' checked={checked} name={cate.name} onChange={selectedHandler}/>
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

    return (
        <div className='filter-container'>
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
        </div>
    )
}

export default FilterSection