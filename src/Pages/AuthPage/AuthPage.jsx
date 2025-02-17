import { useState } from 'react'
import Overlay from '../../Commons/Overlay'
import './AuthPage.css'
import Login from './Login'
import Sigup from './Signup'

function AuthPage({closeOverlay}) {

  return (
    <Overlay closeOverlay={closeOverlay}>
      <Login closeOverlay={closeOverlay}/>
      <Sigup closeOverlay={closeOverlay}/>
    </Overlay>
  )
}

export default AuthPage
