import { useEffect, useState } from 'react'
import './AuthPage.css'
import useAuth from '../../Functionality/useAuth'

function Sigup({closeOverlay}) {
  const [emailText , setEmailText] = useState('')
  const [passwordText , setPasswordText] = useState('')
  const [usernameText , setUsernameText] = useState('')
  const [url , setUrl] = useState('')

  const {data} = useAuth(url , emailText , passwordText , usernameText)

  useEffect(() => {
    console.log(data)
  }, [data])

  function onSubmitAuth () {
    console.log('Sign up')
    closeOverlay()
  }
  function onUsernameChange (e) {
    setUsernameText(e.target.value)
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
        <div className='usernameHolder'>
            <label htmlFor='username' className='label'>username</label>
            <input className='authinput' name='username' type='pass' value={usernameText} onChange={onUsernameChange}/>
        </div>
        <div className='emailHolder'>
            <label htmlFor='email' className='label'>Email</label>
            <input className='authinput' name='email' type='text' value={emailText} onChange={onEmailChange}/>
        </div>
        <div className='passwordHolder'>
            <label htmlFor='password' className='label'>Password</label>
            <input className='authinput' name='password' type='pass' value={passwordText} onChange={onPasswordChange}/>
        </div>
        <button className='authSubmit' onClick={onSubmitAuth}>Sigup</button>
      </div>
    </>
  )
}

export default Sigup
