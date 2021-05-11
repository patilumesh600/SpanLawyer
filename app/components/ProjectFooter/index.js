/**
 *
 * ProjectFooter
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import {
  faCity,
  faSearch,
  faGavel,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectFooter() {
  return (
    <RBS.Container
      style={{
        background: '#000',
        minHeight: '250px',
        color: '#d5d5d5',
        padding: '15px',
        marginTop: '5%',
      }}
      fluid
    >
      <RBS.Row>
        <RBS.Col md={12}>
          <RBS.Row>
            <RBS.Col md={3}>
              <div style={{ fontSize: '16px' }}>Lawyer by Types</div>
              <hr style={{ borderBottom: '1px solid #d5d5d5' }} />
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    {' '}
                    Divorce/Matrimonial Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Property Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Family And Inheritance Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Cheque/Loan/Recovery Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Employment Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Criminal Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Consumer Court Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Accident And Insurance Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Armed Force Tribunal Matter
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Business / Corporate / Startup Issue
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Civil Matters / Something else
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Supreme Court Matter
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Muslim Law Matter
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Immigration Issue
                  </a>
                </li>
              </ul>
            </RBS.Col>

            <RBS.Col md={3}>
              <div style={{ fontSize: '16px' }}>Lawyer by categories</div>
              <hr style={{ borderBottom: '1px solid #d5d5d5' }} />
              <ul>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Civil And Property
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Civil And Property
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Family And Matrimony Advice
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Banking And Corporate Matters
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      color: '#d5d5d5',
                    }}
                  >
                    Employment And Labor Matters
                  </a>
                </li>
              </ul>
            </RBS.Col>
            <RBS.Col md={6}>
              <div style={{ fontSize: '16px' }}>Contact Us</div>
              <hr style={{ borderBottom: '1px solid #d5d5d5' }} />
              <RBS.Form>
                <RBS.FormGroup>
                  <RBS.Form.Row>
                    <RBS.Col md={4} sm={12}>
                      <RBS.Form.Control placeholder="Full name" />
                    </RBS.Col>
                    <RBS.Col md={4} sm={12}>
                      <RBS.Form.Control placeholder="Email Address" />
                    </RBS.Col>
                    <RBS.Col md={4} sm={12}>
                      <RBS.Form.Control placeholder="Phone Number" />
                    </RBS.Col>
                  </RBS.Form.Row>
                </RBS.FormGroup>
                <RBS.FormGroup>
                  <RBS.Form.Row>
                    <RBS.Col>
                      <RBS.Form.Control
                        as="textarea"
                        placeholder="Type your queries here."
                        rows={7}
                      />
                    </RBS.Col>
                  </RBS.Form.Row>
                </RBS.FormGroup>
                <RBS.Form.Row>
                  <RBS.Col md={{ offset: 10, span: 2 }}>
                    <RBS.Button
                      variant="outline-secondary"
                      block
                      type="submit"
                      className="pull-right"
                    >
                      {' '}
                      Submit{' '}
                    </RBS.Button>
                  </RBS.Col>
                </RBS.Form.Row>
              </RBS.Form>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  );
}

ProjectFooter.propTypes = {};

export default ProjectFooter;
