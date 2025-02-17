import { useState } from 'react'
import './AuthPage.css'

function Login({closeOverlay}) {
  const [emailText , setEmailText] = useState('')
  const [passwordText , setPasswordText] = useState('')

  function onSubmitAuth () {
    console.log('login')
    closeOverlay()
  }
  function onEmailChange (e) {
    setEmailText(e.target.value)
  }
  function onPasswordChange (e) {
    setPasswordText(e.target.value)
  }

  return (
    <>
      <div className='authContainer'>
        <div className='emailHolder'>
            <label htmlFor='email' className='label'>Email</label>
            <input className='authinput' name='email' type='text' value={emailText} onChange={onEmailChange}/>
        </div>
        <div className='passwordHolder'>
            <label htmlFor='password' className='label'>Password</label>
            <input className='authinput' name='password' type='pass' value={passwordText} onChange={onPasswordChange}/>
        </div>
        <button className='authSubmit' onClick={onSubmitAuth}>Login</button>
      </div>
    </>
  )
}

export default Login
