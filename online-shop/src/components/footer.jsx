import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {}

    render() {
        return (
            <nav className="navbar multi-color-c navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid footer-fluid">
                    <div className="navbar-nav footer-nav">
                        <Link className="nav-link" id='footer-imprint' to="/impressum">Impressum & Kontakt</Link>
                        <a className="nav-link" id='portfolio-contact' href="http://alex-zeiser-developer.de/" target="_blank">Portfolio</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Footer;