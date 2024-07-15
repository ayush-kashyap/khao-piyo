import React from 'react'
import logo from '../assets/thali.png'
import { Helmet } from 'react-helmet'
export default function Restaurant() {
    return (
        <>
            <Helmet>
                <title>
                    Restaurants | Khao Piyo
                </title>
            </Helmet>
            <div className="containerTag">
                <div className="containcontain">
                    <h2>Restaurants</h2>
                    <div className="containkandar">

                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Aditi's Restaurant</h2>
                                <p>Hi this is Aditi's Restaurant. <br />We serve Tasty Vegetarian Food</p>
                                <button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Anshu Tiffin Service</h2>
                                <p>Hi this is Anshu Tiffin Service. <br />We serve Tasty Vegetarian Food</p>
                                <button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Manali Cake Shop</h2>
                                <p>Hi this is Manali Cake Shop. <br />We serve Tasty Vegetarian Food</p>
                                <button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Ankita Maggie Point</h2>
                                <p>Hi this is Ankita Maggie Point. <br />We serve Tasty Vegetarian Food</p>
                                <button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Devang ka Dhaba</h2>
                                <p>Hi this is Devang ka Dhaba. <br />We serve Tasty Vegetarian Food</p><button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Diksy Ramen shop</h2>
                                <p>Hi this is Diksy Ramen shop. <br />We serve Tasty Vegetarian Food</p><button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>CP ka Dhaba</h2>
                                <p>Hi this is CP ka Dhaba. <br />We serve Tasty Vegetarian Food</p><button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Vinay ka Dhaba</h2>
                                <p>Hi this is Vinay ka Dhaba. <br />We serve Tasty Vegetarian Food</p><button className='btn'>Order Now</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="sec1"><img src={logo} alt="" /></div>
                            <div className="sec">
                                <h2>Avinash Jain Dhaba</h2>
                                <p>Hi this is Avinash Jain Dhaba. <br />We serve Tasty Vegetarian Food</p><button className='btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
