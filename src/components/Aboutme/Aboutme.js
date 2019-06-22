import React, {useEffect} from 'react'
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
                                <p>Hi, my name is Kyle and I am a web developer based in Los Angeles, CA. I love to make
                            creative design and developing convenient applications for the web. Lets get in touch!</p>
                                <hr />
                                <a className="waves-effect waves-light btn modal-trigger" id="Contact" href="#modal1">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Lets get in touch!</h4>
                    <p>Create a contact form and use an NPM package to help send emails.</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>

        </div>
    )
}

export default Aboutme
