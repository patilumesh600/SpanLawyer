/**
 *
 * LawyerProfileEditor
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import * as RBS from 'react-bootstrap';
import {faUserTie, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import userImg from '../../images/bgImages/userImage3.jpg';

function LawyerProfileEditor() {

  const [tags, setTags] = useState([]);
  const [courtTags, setCourtTags] = useState(["Pune Civil Court"]);
  return <>
    <RBS.Col md={12} xs={12} >
      <h6><FontAwesomeIcon icon={faUserAlt} /> Personal Profile</h6>
      <hr className="hryellow" />
      <RBS.Form>
        <RBS.Form.Row>
          <RBS.Col xs={12} md={2} className="text-center">
            <RBS.Image src={userImg} roundedCircle height="100" width="100" />
            <div className="clearfix"></div>
            <small><a className="photoChangeBtn" href="javascript:;">Change Photo</a></small>
            <div className="clearfix"></div>
          </RBS.Col>
          <RBS.Col md={10} xs={12}>
            <RBS.Form.Row>
              <RBS.Col xs={12} md={6}>
                <RBS.Form.Group>
                  <RBS.Form.Label>First Name</RBS.Form.Label>
                  <RBS.Form.Control type="text" size="sm" placeholder="First name" />
                </RBS.Form.Group>
              </RBS.Col>
              <RBS.Col xs={12} md={6}>
                <RBS.Form.Group>
                  <RBS.Form.Label>Last Name</RBS.Form.Label>
                  <RBS.Form.Control type="text" size="sm" placeholder="Last name" />
                </RBS.Form.Group>
              </RBS.Col>
            </RBS.Form.Row>
            <RBS.Form.Row>
              <RBS.Col xs={12} md={6}>
                <RBS.Form.Group>
                  <RBS.Form.Label>Email Addresss</RBS.Form.Label>
                  <RBS.Form.Control type="text" size="sm" placeholder="Email Address" />
                </RBS.Form.Group>
              </RBS.Col>
              <RBS.Col xs={12} md={6}>
                <RBS.Form.Group>
                  <RBS.Form.Label>Phone Number</RBS.Form.Label>
                  <RBS.Form.Control type="text" size="sm" placeholder="Phone Number" />
                </RBS.Form.Group>
              </RBS.Col>
            </RBS.Form.Row>
            <RBS.Form.Row>
              <RBS.Col xs={12} md={12}>
                <RBS.Form.Group>
                  <RBS.Form.Label>Introduction</RBS.Form.Label>
                  <RBS.Form.Control as="textarea" rows={5} plaseholder="Share your profile introduction here" resizable="false" />
                </RBS.Form.Group>
              </RBS.Col>
            </RBS.Form.Row>
            <RBS.Form.Row className="text-right">
              <RBS.Col md={{ span: 4, offset: 8 }}>
                <RBS.Form.Row >
                  <RBS.Col md={8} xs={9}><RBS.Button variant="warning" type="button"> Submit </RBS.Button></RBS.Col>
                  <RBS.Col md={4} xs={3}><RBS.Button variant="secondary" type="button"> Cancel </RBS.Button></RBS.Col>
                </RBS.Form.Row>
              </RBS.Col>
            </RBS.Form.Row>
          </RBS.Col>





        </RBS.Form.Row>

      </RBS.Form>
    </RBS.Col>
    <RBS.Col md={12} xs={12}>
      <h6><FontAwesomeIcon icon={faUserTie} /> Professional Profile</h6>
      <hr className="hryellow" />
      <RBS.Form>
        <RBS.Form.Row>
          <RBS.Col xs={12} md={4}>
            <RBS.Form.Group>
              <RBS.Form.Label>Registration Number</RBS.Form.Label>
              <RBS.Form.Control type="text" size="sm" placeholder="Registration Number" />
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col xs={12} md={4}>
            <RBS.Form.Group>
              <RBS.Form.Label>Registration Counsil</RBS.Form.Label>
              <RBS.Form.Control type="text" size="sm" placeholder="Registration Counsil" />
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col xs={12} md={4}>
            <RBS.Form.Group>
              <RBS.Form.Label>Experiance</RBS.Form.Label>
              <RBS.Form.Control type="text" size="sm" placeholder="Experiance" />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col xs={12} md={4}>
            <RBS.Form.Group>
              <RBS.Form.Label>Office Address</RBS.Form.Label>
              <RBS.Form.Control type="text" size="sm" placeholder="Office Address" />
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col xs={12} md={4}>
            <RBS.Form.Group>
              <RBS.Form.Label>Office Email Address</RBS.Form.Label>
              <RBS.Form.Control type="text" size="sm" placeholder="Office Email Address" />
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col xs={12} md={4}>
            <RBS.Form.Group>
              <RBS.Form.Label>Office Phone Number</RBS.Form.Label>
              <RBS.Form.Control type="text" size="sm" placeholder="Office Phone Number" />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col xs={12} md={6}>
            <RBS.Form.Group>
              <RBS.Form.Label>Working Experiance In</RBS.Form.Label>
              <ReactTagInput className="form-control form-control-sm"
                tags={tags}
                placeholder="Add areas of practice and press enter"
                onChange={(newTags) => setTags(newTags)}
              />
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col xs={12} md={6}>
            <RBS.Form.Group>
              <RBS.Form.Label>Working Courts</RBS.Form.Label>
              <ReactTagInput className="form-control form-control-sm"
                tags={courtTags}
                placeholder="Add court details and press enter"
                onChange={(newTags) => setCourtTags(newTags)}
              />
            </RBS.Form.Group>
          </RBS.Col>

        </RBS.Form.Row>
        <RBS.Form.Row className="text-right">
          <RBS.Col md={{ span: 4, offset: 8 }}>
            <RBS.Form.Row >
              <RBS.Col md={9} xs={9}><RBS.Button variant="warning" type="button"> Submit </RBS.Button></RBS.Col>
              <RBS.Col md={3} xs={3}><RBS.Button variant="secondary" type="button"> Cancel </RBS.Button></RBS.Col>
            </RBS.Form.Row>
          </RBS.Col>
        </RBS.Form.Row>
      </RBS.Form>
    </RBS.Col>
  </>;
}

LawyerProfileEditor.propTypes = {};

export default LawyerProfileEditor;
