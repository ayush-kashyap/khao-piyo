import { useNavigate } from 'react-router-dom';
import HeaderTagg from './NavbarLoggedin';
import HomePageLoggedin from './HomePageLoggedin';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import React, { useState } from 'react'

export default function Login(props) {
  let navigate = useNavigate()
  const [loginItem, setLoginItem] = useState({
    email: "",
    password: ""
  })



  const formSubmit = async (e) => {
    
    e.preventDefault();
    var proBar=document.querySelector('.pro-bar');
        var proBar2=document.querySelector('.progress');
        proBar.style.display='block';
        props.loader();
    const creds = {
      email: loginItem.email,
      password: loginItem.password,
    }
    let authToken;
    await axios.post('http://localhost:1234/auth/login', creds).then(res => {
      if (res.data.success) {
        localStorage.setItem('auth-token', res.data.authToken)
        props.setnav({
          headertag: <HeaderTagg loader={props.loader}/>,
          hometag: <HomePageLoggedin authToken={res.data.authToken} email={res.data.email} />,
          authToken: res.data.authToken,
          email: res.data.email
        })
        proBar.style.display='none';
        proBar2.style.width='0%';
        navigate("/")
      }
      
        alert(res.data.msg)
        
    })

  }
  const onChangeInput = (e) => {

    setLoginItem({
      ...loginItem,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Helmet>
        <title>Log In | Khao Piyo</title>
      </Helmet>
      <div className="containerMain">
        <div className='HomeMain'>
          <div className='HomeContain'>
            <h1>Login</h1>
            <form onSubmit={formSubmit}>
              <input className='inputs' value={loginItem.email} type="email" name="email" id="email" placeholder='Enter email' autoComplete='off' onChange={onChangeInput} />
              <input className='inputs' value={loginItem.password} type="password" name="password" id="pass" placeholder='Enter password' autoComplete='off' onChange={onChangeInput} />
              <input type="submit" value="Log In" className='btn' />
            </form>
          </div>
          <div className='HomeImage'>
          </div>
        </div>
      </div>

    </>
  )
}



