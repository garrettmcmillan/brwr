import React, { Component } from 'react';
import * as NavImports from 'react-bootstrap'

export default class Navigation extends Component {
    render() {
        return (
                <NavImports.Navbar 
                    collapseOnSelect
                    fixed="top"
                    expand="*"
                    variant="dark" 
                    className="px-sm-5 space-test"
                >
                    <div className="logo-div d-flex align-items-center">
                        <NavImports.Navbar.Brand href="#home" className="nav-logo">
                            brwr
                        </NavImports.Navbar.Brand>
                        <span className="nav-slogan">
                            everybody's coffee app
                        </span>
                    </div>
                    <NavImports.Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-0 px-0 toggler border-0">
                        <ion-icon name="cafe-sharp"></ion-icon>
                    </NavImports.Navbar.Toggle>
                    <NavImports.Navbar.Collapse className="m-0" id="responsive-navbar-nav">
                        <NavImports.Nav className="mr-auto nav-dropdown">
                            <NavImports.Nav.Link href="#features">
                                home
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link href="#pricing">
                                calculator
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link href="#f">
                                about
                            </NavImports.Nav.Link>
                        </NavImports.Nav>
                    </NavImports.Navbar.Collapse>
                </NavImports.Navbar>
        )
    }
} 