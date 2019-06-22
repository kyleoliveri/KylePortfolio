import React from 'react'
import "./Header.css"
import Aboutme from "../Aboutme/Aboutme.js"

const Navbar = () => {
    return (
        <div id="backgroundImg">
            <style>
            @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
            @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap');
            </style>
        
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