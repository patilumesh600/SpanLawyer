/**
 *
 * ProductResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import FilterSec from 'components/Filters';
import * as RBS from 'react-bootstrap';
import {
  faEye,
  faCalendarAlt,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import saga from './saga';
import reducer from './reducer';
import makeSelectProductResults from './selectors';
import userImg from '../../images/bgImages/userImage1.jpg';

export function ProductResults() {
  useInjectReducer({ key: 'productResults', reducer });
  useInjectSaga({ key: 'productResults', saga });

  return (
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={3}>
          <FilterSec />
        </RBS.Col>
        <RBS.Col
          md={9}
          style={{ paddingTop: '15px', borderLeft: '1px solid #e1e1e1' }}
        >
          <div style={{ fontSize: '16px' }}>
            <RBS.Row>
              <RBS.Col md={10}>Showing 4 Results for City "Pune" </RBS.Col>
              <RBS.Col md={2}>
                <RBS.Form.Control as="select" size="sm" placeholder="Sort By">
                  <option>Relevance</option>
                  <option>Rating- High to low</option>
                  <option>Rating- Low to High</option>
                </RBS.Form.Control>
              </RBS.Col>
            </RBS.Row>
          </div>
          <hr />
          <RBS.Col md={12}>
            <RBS.Row
              style={{
                border: '1px solid #e1e1e1',
                padding: '15px 0px',
                marginBottom: '5px',
              }}
            >
              <RBS.Col xs={6} md={2} style={{ textAlign: 'center' }}>
                <RBS.Image
                  src={userImg}
                  roundedCircle
                  height="100"
                  width="100"
                />
              </RBS.Col>
              <RBS.Col md={8}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Adv. John Carter{' '}
                  <RBS.Badge
                    pill
                    variant="secondary"
                    style={{ fontSize: '12px' }}
                  >
                    <FontAwesomeIcon icon={faStar} /> 5{' '}
                  </RBS.Badge>
                </div>
                <hr
                  style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
                />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Qualification: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; BA, LLB University of pune
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Specialization: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; Property Issue, Family And Inheritance Issue,
                    Employment And Labor Matters
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Aviailble In: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; District Court, High Court (Bombay), Supreme Court
                  </div>
                </div>
              </RBS.Col>
              <RBS.Col md={2} style={{ padding: '15px' }}>
                <div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-secondary"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faEye} /> View Profile
                    </RBS.Button>
                  </div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-dark"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book a visit
                    </RBS.Button>
                  </div>
                </div>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row
              style={{
                border: '1px solid #e1e1e1',
                padding: '15px 0px',
                marginBottom: '5px',
              }}
            >
              <RBS.Col xs={6} md={2} style={{ textAlign: 'center' }}>
                <RBS.Image
                  src={userImg}
                  roundedCircle
                  height="100"
                  width="100"
                />
              </RBS.Col>
              <RBS.Col md={8}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Adv. John Carter{' '}
                  <RBS.Badge
                    pill
                    variant="secondary"
                    style={{ fontSize: '12px' }}
                  >
                    <FontAwesomeIcon icon={faStar} /> 5{' '}
                  </RBS.Badge>
                </div>
                <hr
                  style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
                />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Qualification: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; BA, LLB University of pune
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Specialization: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; Property Issue, Family And Inheritance Issue,
                    Employment And Labor Matters
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Aviailble In: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; District Court, High Court (Bombay), Supreme Court
                  </div>
                </div>
              </RBS.Col>
              <RBS.Col md={2} style={{ padding: '15px' }}>
                <div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-secondary"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faEye} /> View Profile
                    </RBS.Button>
                  </div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-dark"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book a visit
                    </RBS.Button>
                  </div>
                </div>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row
              style={{
                border: '1px solid #e1e1e1',
                padding: '15px 0px',
                marginBottom: '5px',
              }}
            >
              <RBS.Col xs={6} md={2} style={{ textAlign: 'center' }}>
                <RBS.Image
                  src={userImg}
                  roundedCircle
                  height="100"
                  width="100"
                />
              </RBS.Col>
              <RBS.Col md={8}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Adv. John Carter{' '}
                  <RBS.Badge
                    pill
                    variant="secondary"
                    style={{ fontSize: '12px' }}
                  >
                    <FontAwesomeIcon icon={faStar} /> 5{' '}
                  </RBS.Badge>
                </div>
                <hr
                  style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
                />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Qualification: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; BA, LLB University of pune
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Specialization: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; Property Issue, Family And Inheritance Issue,
                    Employment And Labor Matters
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Aviailble In: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; District Court, High Court (Bombay), Supreme Court
                  </div>
                </div>
              </RBS.Col>
              <RBS.Col md={2} style={{ padding: '15px' }}>
                <div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-secondary"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faEye} /> View Profile
                    </RBS.Button>
                  </div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-dark"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book a visit
                    </RBS.Button>
                  </div>
                </div>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row
              style={{
                border: '1px solid #e1e1e1',
                padding: '15px 0px',
                marginBottom: '5px',
              }}
            >
              <RBS.Col xs={6} md={2} style={{ textAlign: 'center' }}>
                <RBS.Image
                  src={userImg}
                  roundedCircle
                  height="100"
                  width="100"
                />
              </RBS.Col>
              <RBS.Col md={8}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Adv. John Carter{' '}
                  <RBS.Badge
                    pill
                    variant="secondary"
                    style={{ fontSize: '12px' }}
                  >
                    <FontAwesomeIcon icon={faStar} /> 5{' '}
                  </RBS.Badge>
                </div>
                <hr
                  style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
                />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Qualification: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; BA, LLB University of pune
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Specialization: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; Property Issue, Family And Inheritance Issue,
                    Employment And Labor Matters
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Aviailble In: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; District Court, High Court (Bombay), Supreme Court
                  </div>
                </div>
              </RBS.Col>
              <RBS.Col md={2} style={{ padding: '15px' }}>
                <div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-secondary"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faEye} /> View Profile
                    </RBS.Button>
                  </div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-dark"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book a visit
                    </RBS.Button>
                  </div>
                </div>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row
              style={{
                border: '1px solid #e1e1e1',
                padding: '15px 0px',
                marginBottom: '5px',
              }}
            >
              <RBS.Col xs={6} md={2} style={{ textAlign: 'center' }}>
                <RBS.Image
                  src={userImg}
                  roundedCircle
                  height="100"
                  width="100"
                />
              </RBS.Col>
              <RBS.Col md={8}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Adv. John Carter{' '}
                  <RBS.Badge
                    pill
                    variant="secondary"
                    style={{ fontSize: '12px' }}
                  >
                    <FontAwesomeIcon icon={faStar} /> 5{' '}
                  </RBS.Badge>
                </div>
                <hr
                  style={{ marginTop: '2px', borderTop: '1px solid #ffc107' }}
                />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Qualification: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; BA, LLB University of pune
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Specialization: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; Property Issue, Family And Inheritance Issue,
                    Employment And Labor Matters
                  </div>
                </div>
                <br />
                <div style={{ fontSize: '12px', width: '100%' }}>
                  <div style={{ float: 'left' }}>
                    <b>Aviailble In: </b>
                  </div>
                  <div style={{ float: 'left' }}>
                    {' '}
                    &nbsp; District Court, High Court (Bombay), Supreme Court
                  </div>
                </div>
              </RBS.Col>
              <RBS.Col md={2} style={{ padding: '15px' }}>
                <div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-secondary"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faEye} /> View Profile
                    </RBS.Button>
                  </div>
                  <div className="mb-2">
                    <RBS.Button
                      variant="outline-dark"
                      block
                      style={{ fontSize: '14px' }}
                    >
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book a visit
                    </RBS.Button>
                  </div>
                </div>
              </RBS.Col>
            </RBS.Row>
          </RBS.Col>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  );
}

ProductResults.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productResults: makeSelectProductResults(),
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

export default compose(withConnect)(ProductResults);
