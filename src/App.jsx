import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard/ProductCard'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import {http} from './Fetch/fetchProducts'

function App() {
  const [products , setProducts] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  const [error , setError] = useState(undefined)

  useEffect(() => {
    // set the loading to true
    http('https://kaaryar-ecom.liara.run/v1/products')
    .then(data => {
      setProducts(data.products)
    })
    .catch(err => {
      // showing error on page
    })
    .finally(() => {
      // set the loading to false
    })
  } , [])

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Sidebar products={products}/>
        <div className='products-container'>
          {products.map(product => {
            return (
              <ProductCard key={product._id} info={product}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
