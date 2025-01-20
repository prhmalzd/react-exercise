import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import HomePage from './HomePage/HomePage'
import { Route, Routes } from 'react-router'
import ProductPage from './ProductPage/ProductPage'
import LoginPage from './Auth/LoginPage/LoginPage'
import { ContextProvider } from './ContextApi/Context'

function App() {
  const [isLight , setIsLight] = useState(true)

  function changeTheme (isLight) {
    setIsLight(isLight)
  }

  return (
    <ContextProvider>
      <div className={`holder ${isLight ? '' : 'dark-theme'}`}>
        <Navbar changeTheme={changeTheme}/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/product/:productId' element={<ProductPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
