import React, { Component } from 'react'
import "./Aboutme.css"
import axios from 'axios'

class Aboutme extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('formName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response) => {
            if (response.data.msg === 'success'){
                alert("Message Sent"); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contactForm').reset();
    }

    render() {

        return (

            <div>

                <style>
                    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
                    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400i&display=swap');
                    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed&display=swap');
                </style>

                <head>
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
                        rel="stylesheet" type='text/css'/>
                </head>

                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12 l12">
                                <div className="card no-shadows" id="aboutMe">
                                    <div className="card-content center">
                                        <h3 id="Name">Kyle Oliveri</h3>
                                        <h5 id="Web">Web Developer</h5>
                                        <a href="https://github.com/kyleoliveri" target="_blank"><i id="FAIcon" className="fa fa-github-square fa-3x waves-effect waves-light"></i></a>
                                        <a href="https://www.linkedin.com/in/kyleOliveri/" target="_blank"><i id="FAIcon" className="fa fa-linkedin fa-3x waves-effect waves-light"></i></a>
                                        <a href="https://drive.google.com/open?id=1LYrI3ZdhEwfWeBoK540CN2CydbUWCGgQ1pwfxZqj_60" target="_blank"><i id="FAIcon" className="fa fa-3x waves-effect waves-light"></i></a>
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
                            <form onSubmit={this.handleSubmit.bind(this)} id="contactForm" method="POST" className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input onChange={this.handleChange} id="formName" name="name" type="text" className="validate" />
                                        <label for="formName">First Name</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col s12">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">email</i>
                                            <input onChange={this.handleChange} id="email" name="email" type="email" className="validate" />
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">mode_edit</i>
                                        <textarea onChange={this.handleChange} name="message" id="message" type="text"></textarea>
                                        <label for="message"></label>
                                    </div>
                                </div>

                                <a className="waves-effect waves-light btn" onClick={this.handleSubmit.bind(this)} id="Send" href="#modal1">Send</a>

                            </form>
                        </div>
                    </div>

            </div>
                )
        
            }
        
        }
        
        export default Aboutme
