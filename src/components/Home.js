// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// import homeLogo from '../assets/deliver.svg'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
  constructor(props){
    super(props);
    document.querySelector("body").style.backgroundColor="black";
  }
  render() {
    return (
      <>
    <Helmet>
      <title>
      Home | Khao Piyo
      </title>
    </Helmet>
    <div className="containerMain"><div className='HomeMain'>
        <div className='HomeContain'>
          <h1><span style={{color:"var(--primary)"}}>Khao <span id="toBlue">Piyo</span></span> - Food Delivery app</h1>
          <p>Khao Piyo provides home delivery of food from various restaurants across the city. <br /> Just enter your address to get started</p>
          <br /><br />
          <div className='GSbtnko'>
          <button className='btn' id='login'  onClick={()=>{document.getElementById("signup").click()}} onMouseOver={()=>{document.getElementById("toBlue").style.color="var(--secondary)"}} onMouseOut={()=>{document.getElementById("toBlue").style.color="inherit"}}>Get Started</button>
          {/* <FontAwesomeIcon className='arrowget' icon={faArrowRight}/> */}
          </div>
        </div>
        <div className='HomeImage'>
        </div>
    </div>
    
    </div>
    
    </>
    )
  }
}

