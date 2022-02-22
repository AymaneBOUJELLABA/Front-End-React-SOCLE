import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './sidemenu.css';

function SideMenu(props)
{
    return (
        <Nav className="flex-column sidemenu">
            <Nav.Item eventkey="0">
                <Nav.Link className="sidenav-links">Dashboard</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Administration" id="nav-dropdown">
                <NavDropdown.Item eventkey="1.1">
                    <Nav.Link className="sidenav-links">Formations</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventkey="1.1">
                    <Nav.Link className="sidenav-links">Enseignants</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventkey="1.1">
                    <Nav.Link className="sidenav-links">Unités d'Etude</Nav.Link>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

export default SideMenu;