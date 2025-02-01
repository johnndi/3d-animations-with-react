import React from "react";
import Logo from "../assets/images/logo.svg"
import search from "../assets/images/search.svg"
import store from "../assets/images/store.svg"
function Nav() {
    return(
        <nav className="nav-wrapper">
        <div className="nav-content">
            <ul className="list-styled">
                <li>
                    <img src={Logo} alt="apple logo" />
                </li>
                <li><a href="#" className="link-styled">store</a></li>
                <li><a href="#" className="link-styled">mac</a></li>
                <li><a href="#" className="link-styled">ipad</a></li>
                <li><a href="#" className="link-styled">iphone</a></li>
                <li><a href="#" className="link-styled">watch</a></li>
                <li><a href="#" className="link-styled">tv</a></li>
                <li><a href="#" className="link-styled">accessories</a></li>
                <li><a href="#" className="link-styled">support</a></li>
                <li><img src={search} alt="search"/></li>
                <li><img src={store} alt="store"/></li>



            </ul>
            </div>
        </nav>
    )
}

export default Nav;