import React, { useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

export default function HomePageLoggedin(props) {
    const [user, setuser] = useState({})
    const getUserFromAuth = async () => {
        console.log('chal rha h')

        await axios.post('http://localhost:1234/auth/getuser', { email: props.email }).then(res => {
            console.log(res)
            setuser({
                user: res.data

            })
        }).catch(err => {
            console.log(err)
        })
        console.log(user + 'ekdum chal rha h')
    }

    return (

        <>
        {/* // <div style={{ color: "white" }}>
        //     <button onClick={getUserFromAuth}>Click me</button></div> */}
            <Helmet>
                <title>
                    Home | Khao Piyo
                </title>
            </Helmet>
            <div className='HomeMain Homenew'>
                <div className='HomeContain'>
                    <h1>Order Now</h1>
                    <h2>Browse restaurants near you</h2>
                    <button className='btn' id='login' onClick={() => { document.getElementById("restaurants").click() }} ><i>Browse</i></button>
                </div>
                <div className='HomeImage'>
                </div>
            </div></>
    )
}
