import React, { Component } from 'react'
import "./Aboutme.css"

class Aboutme extends Component {

    render() {

        return (
          <div>
            <style>
              @import
              url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
              @import
              url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400i&display=swap');
              @import
              url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap');
            </style>

            <head>
              <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
                rel="stylesheet"
                type="text/css"
              />
            </head>

            <div className="container">
              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="card no-shadows" id="aboutMe">
                    <div className="card-content center">
                      <h3 id="Name">Kyle Oliveri</h3>
                      <h5 id="Web">Web Developer</h5>
                      
                      {/* GITHUB */}
                      <a href="https://github.com/kyleoliveri" target="_blank">
                        <i
                          id="FAIcon"
                          className="fa fa-github-square fa-3x waves-effect waves-light"
                        ></i>
                      </a>

                      {/* LINKEDIN */}
                      <a
                        href="https://www.linkedin.com/in/kyleOliveri"
                        target="_blank"
                      >
                        <i
                          id="FAIcon"
                          className="fa fa-linkedin fa-3x waves-effect waves-light"
                        ></i>
                      </a>

                      {/* RESUME */}
                      <a
                        href="https://github.com/kyleoliveri/KylePortfolio/blob/master/client/src/assets/resume/KyleOliveri_Dev2021_Rev3%20(1).pdf"
                        target="_blank"
                      >
                        <i
                          id="FAIcon"
                          className="fa fa-3x waves-effect waves-light"
                        >
                          
                        </i>
                      </a>
                      <p>
                        Hi, my name is Kyle and I am a web developer based in
                        Los Angeles, CA. I love to create, design, and develop
                        convenient application for the web. Lets get in touch!
                      </p>
                      <hr />
                      <a
                        className="waves-effect waves-light btn modal-trigger"
                        id="Contact"
                        href="#modal1"
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="modal1" className="modal">
              <h3 id="ContactMeModal">Contact Me</h3>
              <div className="row">
                <form
                  id="contactForm"
                  method="POST"
                  className="col s12"
                  action="https://script.google.com/macros/s/AKfycbzT_2ezj0CzT_Y1xPS1WU7o6-1MnlBYYg4QUZKJhj1emClHf90/exec"
                >
                  <div className="form-elements">
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">account_circle</i>
                      <input
                        id="formName"
                        name="name"
                        type="text"
                        className="validate"
                      />
                      <label htmlFor="formName">First Name</label>
                    </div>
                  </div>
                
                  <div className="row">
                    <div className="col s12">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="validate"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea
                        name="message"
                        id="message"
                        type="text"
                      ></textarea>
                      <label htmlFor="message"></label>
                    </div>
                  </div>

                  <button
                    className="waves-effect waves-light btn"
                    id="Send"
                    href="#modal1"
                  >
                    Send
                  </button>
                  
                  </div>

                  <div id="status"></div>

                </form>

              </div>
            </div>
          </div>
        );
        
            }
        
        }
        
        export default Aboutme
