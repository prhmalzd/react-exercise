import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import HomePage from './HomePage/HomePage'
import { Route, Routes } from 'react-router'
import ProductPage from './ProductPage/ProductPage'
import LoginPage from './Auth/LoginPage/LoginPage'

function App() {
  const [search , setSearch] = useState('')
  const [isLight , setIsLight] = useState(true)

  function searchHandler (text) {
    setSearch(text)
  }
  function changeTheme (isLight) {
    setIsLight(isLight)
  }

  return (
    <div className={`holder ${isLight ? '' : 'dark-theme'}`}>
      <Navbar searchHandler ={searchHandler} changeTheme={changeTheme}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage search={search}/>}/>
          <Route path='/product/:productId' element={<ProductPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
