import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <footer className="pv4 ph3 ph5-m ph6-l" id="m-footer">
            <small className="f6 db tc" id='sm'>
                <a 
                    href="https://github.com/code-plus-coffee"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Code Plus Coffee
                </a>
            </small>
        </footer>
    );
}

export default Footer;