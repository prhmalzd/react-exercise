import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import HomePage from './HomePage/HomePage'
import { Route, Routes } from 'react-router'
import ProductPage from './ProductPage/ProductPage'
import LoginPage from './Auth/LoginPage/LoginPage'

function App() {
  const [search , setSearch] = useState('')

  function searchHandler (text) {
    setSearch(text)
  }

  return (
    <>
      <Navbar searchHandler ={searchHandler}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage search={search}/>}/>
          <Route path='/product/:productId' element={<ProductPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
