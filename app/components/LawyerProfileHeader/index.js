/**
 *
 * LawyerProfileHeader
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import { faSignOutAlt, faBalanceScale, faUserEdit, faShareAlt, faUserCog, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faQuestionCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerStyle.css';

function LawyerProfileHeader() {
  return <div id="hdrContainer">
    <RBS.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <RBS.Navbar.Brand
        href="#home"
        style={{ fontSize: '24px', color: '#ffc107' }}
      >
        {' '}
        <FontAwesomeIcon icon={faBalanceScale} /> |{' '}
        <span>
          <b>SpanLaw</b>
        </span>
      </RBS.Navbar.Brand>
      <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <RBS.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
        <RBS.Nav inline>
          <RBS.NavDropdown title="Sanket Deshmukh" id="collasible-nav-dropdown" menuAlign="left">
            <RBS.NavDropdown.Item href="#action/3.1"><FontAwesomeIcon icon={faUserEdit} /> Edit Profile</RBS.NavDropdown.Item>
            <RBS.NavDropdown.Item href="#action/3.2"><FontAwesomeIcon icon={faShareAlt} />  Share Profile</RBS.NavDropdown.Item>
            <RBS.NavDropdown.Item href="#action/3.3"><FontAwesomeIcon icon={faUserCog} /> Profile Settings</RBS.NavDropdown.Item>
            <RBS.NavDropdown.Item href="#action/3.4"><FontAwesomeIcon icon={faHandshake} /> Refer to friend</RBS.NavDropdown.Item>
            <RBS.NavDropdown.Divider />
            <RBS.NavDropdown.Item href="#action/3.5">
              <RBS.Button variant="danger" type="button" size="sm" block> <FontAwesomeIcon icon={faSignOutAlt} /> Logout</RBS.Button>
            </RBS.NavDropdown.Item>
          </RBS.NavDropdown>
        </RBS.Nav>
       </RBS.Navbar.Collapse>

    </RBS.Navbar>
  </div>;
}

LawyerProfileHeader.propTypes = {};

export default LawyerProfileHeader;
