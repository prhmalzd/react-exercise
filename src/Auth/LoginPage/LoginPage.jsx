import { useState } from 'react'
import './LoginPage.css'

function LoginPage () {
    const [username , setUsername] = useState('')
    const [password , setpassword] = useState('')

    function onChangeUsername(e) {
        const value = e.target.value
        setUsername(value)
    }
    function onChangePassword(e) {
        const value = e.target.value
        setpassword(value)
    }
    function loginSubmit() {
        console.log('username : ' , username)
        console.log('password : ' , password)
        setUsername('')
        setpassword('')
    }


    return (
        <div className='login'>
            <input type='text' placeholder='username...' onChange={onChangeUsername} value={username && username}/>
            <input type='password' placeholder='password...' onChange={onChangePassword} value={password && password}/>
            <button onClick={loginSubmit}>Login</button>
        </div>
    )
}

export default LoginPage