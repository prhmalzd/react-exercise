import { useEffect, useState , useContext } from 'react'
import './HomePage.css'
import ProductCard from './ProductCard/ProductCard'
import Sidebar from './Sidebar/Sidebar'
import {http} from '../Fetch/fetchProducts'
import Pagination from './Pagination/Pagination'
import FilterSection from './FilterSection/FilterSection'
import {Context} from '../ContextApi/Context'

let debounceTimerForWindowWidth

function HomePage() {
  const [products , setProducts] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  const [error , setError] = useState(undefined)
  const [paginationCounter , setPaginationCounter] = useState(0)
  const [iswidthBig , setIsWidthBig] = useState(true)
  const [isFilterOpen , setIsFilterOpen] = useState(false)


  // for tracking pages and ids
  const [page , setPage] = useState(1)
  const [categoryIds , setCategoryIds] = useState('')
  const [limitProducts , setLimitProducts] = useState(10)
  const [searchText , setSearchText] = useState('')

  const {search , changeSearchText} = useContext(Context)

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
    let width = window.innerWidth
    window.addEventListener('resize' , () => {
      if (window.innerWidth != width) debounce()
    })
  } , [])

  useEffect(() => {
    let ignore = false
    
    if (!ignore) {
      if (search) {
        fetchProducts(categoryIds , 1 , limitProducts , search)
      }
      else setSearchText('')
    }
    return () => {
      ignore = true
    }
  } , [search])

  function debounce () {
    clearTimeout(debounceTimerForWindowWidth)
    
    debounceTimerForWindowWidth = setTimeout(() => {
      fetchProducts()
    } , 800)
}

  function fetchProducts (categoriyID , page = 1 , limit = limitProducts , search = searchText) {
    
    if (window.innerWidth < 950) {
      limit = 100
      setLimitProducts(100)
      setIsWidthBig(false)
    }
    else {
      setIsWidthBig(true)
    }
    
    setCategoryIds(categoriyID)
    
    setPage(page)
    setIsLoading(true)
    let url = `https://kaaryar-ecom.liara.run/v1/products?page=${page}`
    if (categoriyID) {
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

  function toggleFilter (event) {
    if (event.target.tagName === 'BUTTON' || event.target.className === 'overlay') {
      setIsFilterOpen(!isFilterOpen)
    }
  }

  function removeSearchTextResult () {
    setSearchText('')
    fetchProducts('' , 1 , limitProducts , '')
  }

  return (
    <div className='homePageCorrector'>
        {iswidthBig && <Sidebar products={products} fetchProducts={fetchProducts}/>}
        <div>
          <div className='products-howtoshow'>
            {
            iswidthBig ?
            <div>
              <span>Show: </span>
              <select onClick={limitPdoductsHandler}>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
            :
            <div>
              <button onClick={toggleFilter}>Filter</button>
            </div>
            }
            <div className='products-view'>
              <span>Grid</span>
              <span>List</span>
            </div>
          </div>
          {searchText &&
          <div>
            <span>{searchText} Results :</span>
            <span onClick={removeSearchTextResult}> REMOVE</span>
          </div>}
          <div className='products-container'>
            {isLoading && <div className='loading'>Loading...</div>}
            {products.map(product => {
              return (
                <ProductCard key={product._id} info={product} changeSearchText={changeSearchText}/>
              )
            })}
          </div>
          {paginationCounter > 1 && <Pagination counter={paginationCounter} page={page} paginationHandler={paginationHandler}/>}
        </div>
        {isFilterOpen && <div className='overlay' onClick={toggleFilter}>
          <FilterSection categoryIds={categoryIds} products={products} fetchProducts={fetchProducts}/>
        </div>}
    </div>
  )
}

export default HomePage
