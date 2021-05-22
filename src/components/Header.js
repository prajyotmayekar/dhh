import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
    return (
        <header>
            <div id="header-left">
                <img src="./dhh-logo.png" id="header_logo"/>
                <div id="header_text">
                    Best<br></br>
                    Place and <br></br>
                    Prices
                </div>
            </div>
            <div id="header-right">
                <button id="login_btn">Login</button>
                <button id="register_btn">Register</button>
                <Router>
                    <ul id="header-nav">
                        <li>
                            <Link to="/all-properties">All properties</Link>
                        </li>
                        <li>
                            <Link to="/about">Blog</Link>
                        </li>
                        <li>
                            <Link to="/users">Host guests</Link>
                        </li>
                        <li>
                            <Link to="/users">Support</Link>
                        </li>
                        <li> <div id="saperatorDiv"></div></li>
                        <li>
                            <Link to="/users">English</Link>
                        </li>
                        <li>
                            <Link to="/users">AED</Link>
                        </li>
                        </ul>
                </Router>
            </div>
        </header>
    )
}

export default Header
