import React, {useEffect} from 'react'
import "./assets/css/Aboutme.css"
import M from 'materialize-css/dist/js/materialize.min.js';

const Aboutme = () => {
    useEffect(() => {
        //Init Materialize JS
        M.AutoInit();
      });
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card no-shadows" id="aboutMe">
                            <div className="card-content center">
                                <h3>Kyle Oliveri</h3>
                                <h5>Web Developer</h5>
                                <a className="waves-effect waves-light black btn modal-trigger" href="#modal1">Contact Me</a>
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
