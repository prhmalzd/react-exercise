import { useEffect, useState } from 'react'
import './App.css'
import NavbarHandler from './Commons/Navbar/NavbarHandler'
import useFetchProducts from './Functionality/useFetch'
import Categories from './Pages/Categories/Categories'
import ProductPage from './Pages/ProductPage/ProductPage'

function App() {
  const [search , setSearchText] = useState('')
  const [page , setPageNumber] = useState(1)
  const [category , setCategoryID] = useState('')
  const [limit , setLimitNumber] = useState(10)
  
  const [url , setUrl] = useState('https://kaaryar-ecom.liara.run/v1/products')

  const [cartData , setCartData] = useState([])

  const {data , loading , error , pagination} = useFetchProducts(url)

  const [width , setWidth] = useState(window.innerWidth)

  useEffect(() => {
    handleWidth()
    window.addEventListener('resize' , handleWidth)
  } , [])

  useEffect(() => {
    const query = {search, page, category, limit}
    const params = new URLSearchParams(query).toString()
    setUrl('https://kaaryar-ecom.liara.run/v1/products?' + params)
  } , [search , page , category , limit])

  function changeQuery (newQuery) {
    const keys = Object.keys(newQuery)
    if (keys.includes('search')) setSearchText(newQuery.search)
    else if (keys.includes('page')) setPageNumber(newQuery.page)
    else if (keys.includes('category')) setCategoryID(newQuery.category)
    else if (keys.includes('limit')) setLimitNumber(newQuery.limit)
    else console.log('hey havaset kojast!')
  }

  function handleWidth () {
    setWidth(window.innerWidth)
    if (window.innerWidth < 665) {
      changeQuery({limit : 100})
    }
    else {
      changeQuery({limit : 10})
    }
  }

  function passData (data) {
    setCartData(data)
  }

  return (
    <>
      <NavbarHandler cartData={cartData} changeQuery={changeQuery} width={width}/>
      <Categories passData={passData} changeQuery={changeQuery} products={data} pages={pagination} loading={loading} error={error} width={width}/>
      {/* <ProductPage products={data} passData={passData}/> */}
    </>
  )
}

export default App
