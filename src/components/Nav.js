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
                    className="nav-div"
                >
                    <div className="logo-div d-flex align-items-center">
                        <NavImports.Navbar.Brand href="/brwr" className="nav-logo">
                            brwr.
                        </NavImports.Navbar.Brand>

                    </div>
                    <NavImports.Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-0 p-0 toggler border-0">
                    <span role="img" aria-label="coffee mug icon for navigation dropdown" className="nav-icon">☕</span>
                    </NavImports.Navbar.Toggle>
                    
                    <NavImports.Navbar.Collapse  onToggle className="my-0">
                        <NavImports.Nav onClick={this.setNavExpanded} className="float-right nav-dropdown my-0">
                            <NavImports.Nav.Link as={Link}  to="/brwr/about" href="/brwr/about" className="nav-dropdown-item">
                                About.
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link as={Link}  to="/brwr" href="/brwr" className="nav-dropdown-item">
                                Calculator.
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link as={Link}  to="/brwr/guides" href="/brwr/guides" className="nav-dropdown-item">
                                Brew Guides.
                            </NavImports.Nav.Link>
                            
                        </NavImports.Nav>
                    </NavImports.Navbar.Collapse>
                </NavImports.Navbar>
        )
    }
} 