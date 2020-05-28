import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
            <div className="footer-link-div">
                by 
                <a className="footer-link" 
                    href="https://linkedin.com/in/garrettmcmillan" 
                    target="_blank"
                    rel="noopener noreferrer"> <strong>garrett mcmillan</strong>
                </a>
            </div>
            </div>
        )
    }
}