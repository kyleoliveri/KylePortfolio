import React, { useEffect } from 'react'
import "./Header.css"
import Aboutme from "../Aboutme/Aboutme.js"
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {

    useEffect(() => {
        //Init Materialize JS
        M.AutoInit();
      });

    return (
        <div className="scrollspy" id="backgroundImg">
            <style>
            @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
            @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap');
            </style>
        
            <nav className="transparent no-shadows">
                <div className="nav-wrapper">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger black-text"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#ProjectBody" className="black-text">Projects</a></li>
                        <li><a href="#modal1" className="modal-trigger black-text">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <h3 className="center" id="Menu">Menu</h3>
                <hr></hr>
                <li><a href="#backgroundImg" className="">Home</a></li>
                <li><a href="#ProjectBody">Projects</a></li>
                <li><a className="modal-trigger" href="#modal1">Contact</a></li>
            </ul>

            <Aboutme />

        </div>
    )
}

export default Navbar
