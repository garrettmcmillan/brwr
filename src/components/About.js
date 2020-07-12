import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="full-page-container">
                <div className="about-container">
                    <div className="about-div about-text">
                        <h1 className="about-title">About Us.</h1>
                        <p className="about-text">
                            <span className="brwr-about">brwr </span> was built to be everybody’s coffee app, something for all, even if they’re not obsessed with coffee just yet.
                            When my search for the perfect coffee calculator came up short I decided to build my own.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
