import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer" id="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col l12 m12 s12 center">
                        <a href="https://github.com/kyleoliveri" target="_blank"><i id="FAIcon" className="center fa fa-github-square fa-2x waves-effect waves-light"></i></a>
                        <a href="https://www.linkedin.com/in/kyleOliveri/" target="_blank"><i id="FAIcon" className="center fa fa-linkedin fa-2x waves-effect waves-light"></i></a>
                        <a href="https://drive.google.com/open?id=1f0AS9E2sVU2Q9ftABuITdll3XA89939a" target="_blank"><i id="FAIcon" className="center fa fa-file fa-2x waves-effect waves-light"></i></a>
                        </div>
                        </div>
                    </div> 
                <div className="footer-copyright black-text">
                    <div className="container center">
                    <div>© 2019 Copyright Kyle Oliveri</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
