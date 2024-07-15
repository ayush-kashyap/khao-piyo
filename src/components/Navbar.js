import React from "react";
// import kplogo from "../assets/kplogo.png";
import { Link, Outlet } from "react-router-dom";

const listOfLinks=[
"home",
"login",
"signup"
]
let eid="";
const selecClassCopy=(m)=>{
  console.log(m)
  if(m===eid){
    document.getElementById("ul"+m).classList.add("activeLink");
  document.getElementById(m).classList.add("activeNav");
  }else{
    document.getElementById("ul"+m).classList.remove("activeLink");
  document.getElementById(m).classList.remove("activeNav");
  }
}

const selectClass=(e)=>{
  eid=e.target.id
  listOfLinks.forEach(selecClassCopy)
}
export default function HeaderTag() {
  return (
    <>
    <header className="header">
      <nav className="nav">
        <div className="link-div"> <Link onClick={selectClass} className="nav-links activeNav" id="home" to="/" >Home</Link><span className="underline activeLink" id="ulhome"></span></div>
        <div className="link-div"> <Link onClick={selectClass} className="nav-links" id="login" to="/login" >LogIn</Link><span className="underline" id="ullogin"></span></div>
        <div className="link-div"> <Link onClick={selectClass}  className="nav-links" id="signup" to="/signup" >SignUp</Link><span className="underline" id="ulsignup"></span></div>
      </nav>
    </header>
    <Outlet/>
    </>
  );
}
