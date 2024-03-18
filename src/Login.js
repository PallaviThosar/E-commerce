import React, { useState } from 'react'
import './Login.css';
import logo from './Images/logo.png'
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();


  }

  const register = e =>{
    e.preventDefault();

    
  }
  return (
    <div className='login'>
        <div className='login__container'>
        <Link to= './'>
<img className='login__logo' src={logo}/>
</Link>

    <h1>Sign In</h1>
    <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

        <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
    </form>
   
 <p>By signing-in you agree to Our Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice </p>
 <button onClick={register} className='login__registerButton'>Create Your Account</button>
</div>
    </div>
  )
}

export default Login