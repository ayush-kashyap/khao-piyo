import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomePageLoggedin from './HomePageLoggedin';
import HeaderTagg from './NavbarLoggedin';
export default function SignUp(props) {
    let history = useNavigate()
    const [signupVar, setfirst] = useState({
        email: "",
        name: "",
        password: "",
        cpassword: ""
    })
    const formSubmit = async (e) => {
        e.preventDefault();
        var proBar=document.querySelector('.pro-bar');
        var proBar2=document.querySelector('.progress');
        proBar.style.display='block';
        props.loader();
        const creds = {
            name:signupVar.name,
            email:signupVar.email,
            password:signupVar.password,
        }
        let authToken;
        if (signupVar.password === signupVar.cpassword) {
            
                await axios.post('http://localhost:1234/auth/signup', creds).then(res => {
                        if (res.data.success) {
                            localStorage.setItem('auth-token', res.data.authToken)
                            props.setnav({
                                headertag:<HeaderTagg/>,
                                hometag:<HomePageLoggedin authToken={res.data.authToken} email={res.data.email}/>,
                                authToken:res.data.authToken,
                                email:res.data.email
                            })
                            proBar.style.display='none';
                            proBar2.style.width='0%';
                            history("/")
                        }
                        alert(res.data.msg)
                        
                    })
                    
                } else {
                    setTimeout(() => {
                        alert("Password and confirm password dont match")
                        proBar.style.display='none';
                        proBar2.style.width='0%';
            }, 2000);
        }
        
    }

    const onChangeInput = (e) => {

        setfirst({
            ...signupVar,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <Helmet>
                <title>Sign UP | Khao Piyo</title>
            </Helmet>
            <div className='HomeMain'>
                <div className='HomeContain'>
                    <h1>Signup Form</h1>
                    <form onSubmit={formSubmit}>
                        <input className='inputs' required type="email" name="email" id="email" placeholder='Enter email' autoComplete='off' onChange={onChangeInput} value={signupVar.email} />
                        <input className='inputs' required type="text" name="name" id="name" placeholder='Enter name' autoComplete='off' onChange={onChangeInput} value={signupVar.name} />
                        <input className='inputs' required type="password" name="password" id="pass" placeholder='Enter password' autoComplete='off' onChange={onChangeInput} value={signupVar.password} />
                        <input className='inputs' required type="password" name="cpassword" id="cpass" placeholder='Enter confirm password' autoComplete='off' onChange={onChangeInput} value={signupVar.cpassword} />
                        <input type="submit" value="SignUp" className='btn' />
                    </form>
                </div>
                <div className='HomeImage'>
                    {/* <Link className='goToHome' style={{ display: 'none' }} to='/userscreen'></Link> */}
                    {/* <img src={deliver} alt="Home page logo" /> */}
                    {/* <h3>Your food is all set to be cooked, <br /> Sign Up now !! <br />To get it delivered at your doorstep</h3> */}
                </div>
            </div>
        </>
    )
}


