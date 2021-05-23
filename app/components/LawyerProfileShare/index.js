/**
 *
 * LawyerProfileShare
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import { faEnvelope, faCommentAlt, faCopy } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt,faUserTag } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function LawyerProfileShare() {
  return <>
    <RBS.Col className=" text-center shareHeading" md={12} xs={12}><h2>Let Others Know You Are Here !</h2></RBS.Col>
    <div className="clearfix"></div>
    <RBS.Col className=" text-center shareIcon" md={12} xs={12}><FontAwesomeIcon icon={faUserTag} /> </RBS.Col>
    <RBS.Col className=" text-center" md={12} xs={12}>
      <RBS.Col md={{ span: 4, offset: 4 }} >
        <RBS.InputGroup>
          <RBS.FormControl placeholder="Copy URL" aria-label="Copy URL" aria-describedby="basic-addon1" />
          <RBS.InputGroup.Append>
            <RBS.InputGroup.Text id="basic-addon1" className="text-primary noBg"><FontAwesomeIcon icon={faCopy} /> </RBS.InputGroup.Text>
          </RBS.InputGroup.Append>
        </RBS.InputGroup>
        <div className="clearfix" />
        <br />
        <div className="text-muted">OR</div>
        <br />
        <RBS.InputGroup>
          <RBS.InputGroup.Prepend>
            <RBS.InputGroup.Text id="basic-addon1" className="text-success noBg"><FontAwesomeIcon icon={faWhatsapp} /> </RBS.InputGroup.Text>
          </RBS.InputGroup.Prepend>
          <RBS.FormControl placeholder="Whatsapp Number" aria-label="Whaatsapp Number" aria-describedby="basic-addon1" />
        </RBS.InputGroup>
        <div className="clearfix" />
        <br />
        <RBS.InputGroup>
          <RBS.InputGroup.Prepend>
            <RBS.InputGroup.Text id="basic-addon1" className="text-danger noBg"><FontAwesomeIcon icon={faEnvelope} /> </RBS.InputGroup.Text>
          </RBS.InputGroup.Prepend>
          <RBS.FormControl placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1" />
        </RBS.InputGroup>
        <div className="clearfix" />
        <br />
        <RBS.InputGroup>
          <RBS.InputGroup.Prepend>
            <RBS.InputGroup.Text id="basic-addon1" className="text-info noBg"><FontAwesomeIcon icon={faCommentAlt} /> </RBS.InputGroup.Text>
          </RBS.InputGroup.Prepend>
          <RBS.FormControl placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" />
        </RBS.InputGroup>
        <br />
        <RBS.Button block type="button" variant="warning"><FontAwesomeIcon icon={faShareAlt} /> Share Details</RBS.Button>
      </RBS.Col>
    </RBS.Col>
  </>;
}

LawyerProfileShare.propTypes = {};

export default LawyerProfileShare;
