import React, { useEffect } from 'react'
import "./Aboutme.css"
import M from 'materialize-css/dist/js/materialize.min.js';

const Aboutme = () => {

    useEffect(() => {
        //Init Materialize JS
        M.AutoInit();
    });

    return (
        <div>

            <style>
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400i&display=swap');
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap');
            </style>

            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card no-shadows" id="aboutMe">
                            <div className="card-content center">
                                <h3 id="Name">Kyle Oliveri</h3>
                                <h5 id="Web">Web Developer</h5>
                                <a href="https://github.com/kyleoliveri" target="_blank"><i id="FAIcon" className="fa fa-github-square fa-3x waves-effect waves-light"></i></a>
                                <a href="https://www.linkedin.com/in/kyleOliveri/" target="_blank"><i id="FAIcon" className="fa fa-linkedin fa-3x waves-effect waves-light"></i></a>
                                <a href="https://drive.google.com/open?id=1f0AS9E2sVU2Q9ftABuITdll3XA89939a" target="_blank"><i id="FAIcon" className="fa fa-file fa-2x waves-effect waves-light"></i></a>
                                <p>Hi, my name is Kyle and I am a web developer based in Los Angeles, CA. I love to create, design, and develop convenient application for the web. Lets get in touch!</p>
                                <hr />
                                <a className="waves-effect waves-light btn modal-trigger" id="Contact" href="#modal1">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modal1" className="modal">
                <h3 id="ContactMeModal">Contact Me</h3>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                <label for="icon_prefix">First Name</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email_inline" type="email" className="validate" />
                                    <label for="email_inline">Email</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="icon_prefix2"></textarea>
                                <label for="icon_prefix2"></label>
                            </div>
                        </div>

                        <a className="waves-effect waves-light btn" id="Send" href="#modal1">Send</a>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Aboutme
