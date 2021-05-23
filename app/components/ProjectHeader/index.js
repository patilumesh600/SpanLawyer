/**
 *
 * ProjectHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';

import { faSearch, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerStyle.css';

function ProjectHeader() {

  return (
    <RBS.Navbar bg="warning" variant="light" fixed="top">
      <RBS.Navbar.Brand 
        href="#home"
        style={{ fontSize: '30px', color: '#5e5e5e' }}
      >
        {' '}
        <FontAwesomeIcon icon={faBalanceScale} /> |{' '}
        <span>
          <b>SpanLaw</b>
        </span>
      </RBS.Navbar.Brand>

      <RBS.Nav className="mr-auto col-md-8">
        <RBS.Form inline className="col-md-12">
          <RBS.Col md={{ span: 10, offset: 1 }}>
            <RBS.InputGroup className="mb-7">
              <RBS.FormControl
                placeholder="Search Lawyers by City, Pincode, Specializations, Area of practice."
                aria-label="Search Lawyers by City, Pincode, Specializations, Area of practice. "
                aria-describedby="basic-addon2"
              />
              <RBS.InputGroup.Append>
                <RBS.Button variant="dark">
                  <FontAwesomeIcon icon={faSearch} />
                </RBS.Button>
              </RBS.InputGroup.Append>
            </RBS.InputGroup>
          </RBS.Col>
        </RBS.Form>
      </RBS.Nav>
      <RBS.Nav inline>
        <RBS.NavDropdown
          title="Sanket Deshmukh"
          id="collasible-nav-dropdown"
          menuAlign="left"
        >
          <RBS.NavDropdown.Item href="#action/3.1">Action</RBS.NavDropdown.Item>
          <RBS.NavDropdown.Item href="#action/3.2">
            Another action
          </RBS.NavDropdown.Item>
          <RBS.NavDropdown.Item href="#action/3.3">
            Something
          </RBS.NavDropdown.Item>
          <RBS.NavDropdown.Divider />
          <RBS.NavDropdown.Item href="#action/3.4">
            Separated link
          </RBS.NavDropdown.Item>
        </RBS.NavDropdown>
      </RBS.Nav>
    </RBS.Navbar>
  );
}

ProjectHeader.propTypes = {};

export default ProjectHeader;
