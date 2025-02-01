import React from "react";
import Iphone from "../assets/images/iphone-14.jpg"
import Holdingphone from "../assets/images/iphone-hand.png"
function Jumbotron() {
    const handlelearnmore=()=>{
        const element=document.querySelector(".sound-section")
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left:0,
            behavior: "smooth"
        });
    }
    return(
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="iphone"/>
            <p className="text">Big and bigger</p>
            <span className="description">
                Buy the iPhone 14 or iPhone 14 Pro and get a 25% off coupon when you order now. 
                <br/>
                <strong>Limited time offer, valid until 31st March 2024.</strong>
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handlelearnmore}>Learn more</a>
                </li>
            </ul>
            <img className="iphone-img" src={Holdingphone} alt="holding phone"/>
         
        </div>
    )
}

export default Jumbotron;