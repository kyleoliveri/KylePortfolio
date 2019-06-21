import React from 'react'
import "./assets/css/Header.css"
import Aboutme from "./Aboutme"

const Navbar = () => {
    return (
        <div id="backgroundImg">
            <head>
            <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400i&display=swap" rel="stylesheet"></link>
            <script src="https://kit.fontawesome.com/2478e68568.js"></script>
            </head>
        
            <nav className="transparent no-shadows">
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#" className="black-text">Home</a></li>
                        <li><a href="#" className="black-text">Projects</a></li>
                        <li><a href="#" className="black-text">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <h3 className="center" id="Menu">Menu</h3>
                <hr></hr>
                <li><a href="#" className="">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <Aboutme />

        </div>
    )
}

export default Navbar
