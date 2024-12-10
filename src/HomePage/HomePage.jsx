import { useEffect, useState } from 'react'
import './HomePage.css'
import ProductCard from './ProductCard/ProductCard'
import Sidebar from './Sidebar/Sidebar'
import {http} from '../Fetch/fetchProducts'
import Pagination from './Pagination/Pagination'

function HomePage({search}) {
  const [products , setProducts] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  const [error , setError] = useState(undefined)
  const [paginationCounter , setPaginationCounter] = useState(0)


  // for tracking pages and ids
  const [page , setPage] = useState(1)
  const [categoryIds , setCategoryIds] = useState('')
  const [limitProducts , setLimitProducts] = useState(10)
  const [searchText , setSearchText] = useState('')

  useEffect(() => {
    let ignore = false
    
    if (!ignore) {
      fetchProducts()
    }
    return () => {
      ignore = true
    }
  } , [])

  useEffect(() => {
    let ignore = false
    
    if (!ignore) {
        fetchProducts(categoryIds , 1 , limitProducts , search)
    }
    return () => {
      ignore = true
    }
  } , [search])

  function fetchProducts (categoriyID , page = 1 , limit = limitProducts , search = searchText) {
    
    setPage(page)
    setIsLoading(true)
    let url = `https://kaaryar-ecom.liara.run/v1/products?page=${page}`
    if (categoriyID) {
      setCategoryIds(categoriyID)
      url += `&category=${categoriyID}`
    }
    if (limit) {
      setLimitProducts(limit)
      url += `&limit=${limit}`
    }
    if (search) {
      setSearchText(search)
      url+= `&search=${search}`
    }
    http(url)
    .then(data => {
      setProducts(data.products)
      setPaginationCounter(data.pagination.totalPages)
    })
    .catch(err => {
      setError(err)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  function paginationHandler (event) {
    if (event.target.tagName == 'SPAN') {
      let number = event.target.innerText
      fetchProducts(categoryIds , number , limitProducts , searchText)
    }
  }

  function limitPdoductsHandler (event) {
    let number = event.target.value
    fetchProducts(categoryIds , 1 , number , searchText)
  }

  return (
    <>
        <Sidebar products={products} fetchProducts={fetchProducts}/>
        <div>
            <select onClick={limitPdoductsHandler}>
              <option>10</option>
              <option>20</option>
            </select>
          <div className='products-container'>
            {isLoading && <div className='loading'>Loading...</div>}
            {/* {error && <div className='loading'>We have Error {error}</div>} */}
            {products.map(product => {
              return (
                <ProductCard key={product._id} info={product}/>
              )
            })}
          </div>
          <Pagination counter={paginationCounter} page={page} paginationHandler={paginationHandler}/>
        </div>
    </>
  )
}

export default HomePage
