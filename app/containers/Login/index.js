/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as RBS from 'react-bootstrap';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

import './style.css';
import bgImages from '../../images/bgImages/bgImage4.jpg';
import sideImg from '../../images/bgImages/sideImage1.jpg';

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <div
      style={{
        minHeight: '635px',
        backgroundImage: `url(${bgImages})`,
        backgroundSize: 'cover',
      }}
    >
      <RBS.Container fluid>
        <RBS.Row className="align-items-center">
          <RBS.Col
            md={{ span: 8, offset: 2 }}
            style={{
              minHeight: '500px',
              background: '#000',
              color: '#fff',
              marginTop: '5%',
              boxShadow: '0px 0px 10px #5d5d5d',
            }}
          >
            <RBS.Row>
              <RBS.Col
                md={7}
                className="d-none d-sm-block"
                style={{
                  minHeight: '500px',
                  backgroundImage: `url(${sideImg})`,
                  backgroundSize: 'cover',
                  paddingTop: '5%',
                }}
              >
                <div style={{ fontSize: '50px' }}>
                  <b>SpanLaw</b>
                </div>
                <hr style={{ borderBottom: '1px solid red' }} />
                <div style={{ color: '#fae3bb' }}>
                  <h2>Your one stop solution for all the judiciary needs</h2>
                  <br />
                  <ul>
                    <li>Search the best lawyers around you.</li>
                    <li>Book a appointment with a consultants.</li>
                    <li>Book a appointment with a consultants.</li>
                    <li>Book a appointment with a consultants.</li>
                    <li>Book a appointment with a consultants.</li>
                    <li>Book a appointment with a consultants.</li>
                  </ul>
                </div>
              </RBS.Col>
              <RBS.Col
                md={5}
                id="frmLogin"
                style={{
                  background: '#fff',
                  minHeight: '500px',
                  padding: '10px',
                  color: '#6a6a6a',
                }}
              >
                <RBS.Col md={12} id="frmLogin">
                  <RBS.Form>
                    <div
                      style={{
                        textAlign: 'center',
                        fontSize: '28px',
                        fontWeight: 'bold',
                      }}
                    >
                      Login
                    </div>
                    <hr />
                    <RBS.Form.Group controlId="formBasicEmail">
                      <RBS.Form.Label>
                        Email address or phone number
                      </RBS.Form.Label>
                      {/* <RBS.Form.Control type="email" placeholder="Email address or phone number" /> */}
                      <RBS.InputGroup className="mb-2">
                        <RBS.InputGroup.Prepend>
                          <RBS.InputGroup.Text>
                            <FontAwesomeIcon icon={faAt} />
                          </RBS.InputGroup.Text>
                        </RBS.InputGroup.Prepend>
                        <RBS.FormControl
                          id="inlineFormInputGroup"
                          placeholder="Username"
                        />
                      </RBS.InputGroup>
                    </RBS.Form.Group>

                    <RBS.Form.Group controlId="formBasicPassword">
                      <RBS.Form.Label>Password</RBS.Form.Label>
                      <RBS.InputGroup className="mb-2">
                        <RBS.InputGroup.Prepend>
                          <RBS.InputGroup.Text>
                            <FontAwesomeIcon icon={faKey} />
                          </RBS.InputGroup.Text>
                        </RBS.InputGroup.Prepend>
                        <RBS.FormControl
                          id="inlineFormInputGroup"
                          type="password"
                          placeholder="Password"
                        />
                      </RBS.InputGroup>
                    </RBS.Form.Group>
                    <RBS.Form.Group controlId="formBasicCheckbox">
                      <RBS.Form.Check type="checkbox" label="Remember me" />
                    </RBS.Form.Group>
                    <RBS.Button variant="warning" block type="button" ali>
                      Login
                    </RBS.Button>
                    <br />
                    <RBS.Form.Group className="text-center">
                      <RBS.Form.Label>OR</RBS.Form.Label>
                      <br />

                      <RBS.Form.Label>
                        New user ? <a href="javascript:;"> Register here</a>
                      </RBS.Form.Label>
                      <br />

                      <RBS.Form.Label>
                        Forgot Password ? <a href="javascript:;"> Click here</a>
                      </RBS.Form.Label>
                    </RBS.Form.Group>
                  </RBS.Form>
                </RBS.Col>

                {/* <RBS.Col md={12} id="frmRegister" style={{ display: 'none' }}>
                <Register />
              </RBS.Col>

              <RBS.Col md={12} id="frmForgotPwd">
                <ForgotPwd />
              </RBS.Col> */}
              </RBS.Col>
            </RBS.Row>
          </RBS.Col>
        </RBS.Row>
      </RBS.Container>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
