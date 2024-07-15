import React from 'react'
import { Component, useState } from 'react';
import { Helmet } from 'react-helmet';



export default function SignUp() {
  const [credential, setCredential] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  });
  const onChangeInput=(e)=>{
    setCredential({...credential, [e.target.name]:e.target.value});
    
  }
  const signUpHandler= async (e)=>{
    e.preventDefault();
    if(credential.password===credential.cpassword){
      console.log(credential);
      
      const response= await fetch('http://localhost:5000/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:  JSON.stringify({name:credential.name,email: credential.email,password:credential.password})
      });
      const json= await response.json();
      console.log(json);
      if(json.success){
      }else{
        alert("some error");
      }
    }else{
      alert("password and confirm password don't match");
    }

  }

  return (
    <>
    <Helmet>
        <title>Sign UP | Homework Helper</title>
    </Helmet>
    <div className='HomeMain HomeNew'>
        <div className='HomeContain'>
          <h1>Signup Form</h1>
          <form onSubmit={signUpHandler} method='POST'>
            <input className='inputs' type="email" name="email" id="email" placeholder='Enter email' autoComplete='off' onChange={onChangeInput} value={credential.email}/>
            <input className='inputs' type="text" name="name" id="name" placeholder='Enter name' autoComplete='off' onChange={onChangeInput} value={credential.name}/>
            <input className='inputs' type="password" name="password" id="pass" placeholder='Enter password' autoComplete='off' onChange={onChangeInput} value={credential.password}/>
            <input className='inputs' type="password" name="cpassword" id="cpass" placeholder='Enter confirm password' autoComplete='off' onChange={onChangeInput} value={credential.cpassword}/>
            <input type="submit" value="SignUp" className='btn'/>
          </form>
        </div>
        <div className='HomeImage'>
            {/* <img src={signuplogo} alt="Home page logo" /> */}
        </div>
    </div>
    </>
  )
}


