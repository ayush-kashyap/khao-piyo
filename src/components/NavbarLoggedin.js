import React from "react";
// import kplogo from "../assets/kplogo.png";
import { Link, Outlet } from "react-router-dom";

export default function HeaderTagg(props) {
    const listOfLinks = [
        "home",
        "profile",
        "restaurants"
    ]
    let eid = "";
    const selecClassCopy = (m) => {
        console.log(m)
        if (m === eid) {
            document.getElementById("ul" + m).classList.add("activeLink");
            document.getElementById(m).classList.add("activeNav");
        } else {
            document.getElementById("ul" + m).classList.remove("activeLink");
            document.getElementById(m).classList.remove("activeNav");
        }
    }
    
    const selectClass = (e) => {
            eid = e.target.id
            listOfLinks.forEach(selecClassCopy)
            
    }
    return (
        <>
            <header className="headerNew">
                <nav className="navNew">
                    <div className="link-div"> <Link onClick={selectClass} className="nav-links activeNav" id="home" to="/" >Home</Link><span className="underline activeLink" id="ulhome"></span></div>
                    <div className="link-div"> <Link onClick={selectClass} className="nav-links" id="profile" to="/profile">Profile</Link><span className="underline" id="ulprofile"></span></div>
                    <div className="link-div"> <Link onClick={selectClass} className="nav-links" id="restaurants" to="/restaurants" >Restaurants</Link><span className="underline" id="ulrestaurants"></span></div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
