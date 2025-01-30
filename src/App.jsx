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
  const [changeCard , setChangeCard] = useState(0)
  const [pathName , setPathName] = useState('')

  function changeTheme (isLight) {
    setIsLight(isLight)
  }
  function changeCardAmount (amount) {
    setChangeCard(amount)
  }
  function setPath (path) {
    setPathName(path)
  }

  return (
    <ContextProvider>
      <div className={`holder ${isLight ? '' : 'dark-theme'}`}>
        <Navbar changeTheme={changeTheme} changeCard={changeCard} pathName={pathName} setPath={setPath}/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage changeCardAmount={changeCardAmount} setPath={setPath}/>}/>
            <Route path='/product/:productId' element={<ProductPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
