
import { useState } from 'react'
import './NavbarComponents.css'
import AuthPage from '../../Pages/AuthPage/AuthPage'

function NavbarPath() {
  const [showAuthModal , setShowAuthModal] = useState(false)

  function onAuthModalHandler () {
    setShowAuthModal(true)
  }
  function closeOverlay () {
    setShowAuthModal(false)
  }

  return (
    <>
      <nav className='pathes'>
        <span>Home</span>
        <span>About us</span>
        <span>Categories</span>
        <span>Blog</span>
        <button onClick={onAuthModalHandler}>Login / Signup</button>
      </nav>
      {showAuthModal && <AuthPage closeOverlay={closeOverlay}/>}
    </>
  )
}

export default NavbarPath
