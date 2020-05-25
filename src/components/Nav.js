import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as NavImports from 'react-bootstrap'

export default class Navigation extends Component {
/*     constructor(props) {
        super(props);
        this.state = {
            navExpanded: false
        }
        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    };

    closeNav() {
        this.setState({ navExpanded: false });
    } */

    render() {
        return (
            
                <NavImports.Navbar 
                    collapseOnSelect
                    fixed="top"
                    expand="*"
                    variant="dark" 
                    className="px-sm-5 nav-div"
                >
                    <div className="logo-div d-flex align-items-center">
                        <NavImports.Navbar.Brand href="/" className="nav-logo">
                            brwr
                        </NavImports.Navbar.Brand>
{/*                         <p className="nav-slogan">
                            everybody's coffee app
                        </p>  */}
                    </div>
                    <NavImports.Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-0 p-0 toggler border-0">
                    <span role="img" aria-label="coffee mug icon for navigation dropdown" className="nav-icon">☕</span>
                    </NavImports.Navbar.Toggle>
                    
                    <NavImports.Navbar.Collapse  onToggle className="my-0">
                        <NavImports.Nav onClick={this.setNavExpanded} className="float-right nav-dropdown my-0">
                            <NavImports.Nav.Link  className="nav-dropdown-item" to="/" href="/" >
                                    calculator
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link as={Link} className="nav-dropdown-item" to="/tips" href="/tips">
                                    brewing tips
                            </NavImports.Nav.Link>
                            <NavImports.Nav.Link as={Link} className="nav-dropdown-item" to="/about" href="/about">
                                    about
                            </NavImports.Nav.Link>
                        </NavImports.Nav>
                    </NavImports.Navbar.Collapse>
                </NavImports.Navbar>
        )
    }
} 