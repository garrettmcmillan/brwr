import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as NavImports from 'react-bootstrap'

export default class Navigation extends Component {
    render() {
        return (
                <NavImports.Navbar 
                    collapseOnSelect
                    fixed="top"
                    expand="*"
                    variant="dark" 
                    className="px-sm-5"
                >
                    <div className="logo-div d-flex align-items-center">
                        <NavImports.Navbar.Brand href="#home" className="nav-logo">
                            brwr
                        </NavImports.Navbar.Brand>
{/*                         <span className="nav-slogan">
                            everybody's coffee app
                        </span> */}
                    </div>
                    <NavImports.Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-0 p-0 toggler border-0">
                        <ion-icon name="cafe-sharp"></ion-icon>
                    </NavImports.Navbar.Toggle>
                    
                    <NavImports.Navbar.Collapse className="my-0" id="responsive-navbar-nav">
                        <NavImports.Nav className="float-right nav-dropdown my-0">
                            <NavImports.Nav.Link className="nav-dropdown-item">
                                <Link to="/" className="nav-dropdown-item">
                                    calculator
                                </Link>
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link className="nav-dropdown-item">
                                <Link to="/methods" className="nav-dropdown-item">
                                    brewing methods
                                </Link>
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link className="nav-dropdown-item">
                                <Link to="/" className="nav-dropdown-item">
                                    about
                                </Link>
                            </NavImports.Nav.Link>
                        </NavImports.Nav>
                    </NavImports.Navbar.Collapse>
                </NavImports.Navbar>
        )
    }
} 