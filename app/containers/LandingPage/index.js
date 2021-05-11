/**
 *
 * LandingPage
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
import {
  faEye,
  faCalendarAlt,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import banImg1 from '../../images/bgImages/bgImage1.jpg';
import banImg2 from '../../images/bgImages/bgImage2.jpg';
import banImg3 from '../../images/bgImages/bgImage3.jpg';
import userImg from '../../images/bgImages/userImage1.jpg';
import catImg from '../../images/bgImages/LawyerCategories/CatImage1.png';

export function LandingPage() {
  useInjectReducer({ key: 'landingPage', reducer });
  useInjectSaga({ key: 'landingPage', saga });

  return (
    <div>
      <RBS.Container fluid style={{ position: 'relative' }}>
        <RBS.Row>
          <RBS.Col md={12} style={{ padding: '0px' }}>
            <RBS.Carousel>
              <RBS.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banImg1}
                  alt="First slide"
                  height="500px"
                />
                <RBS.Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </RBS.Carousel.Caption>
              </RBS.Carousel.Item>
              <RBS.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banImg2}
                  alt="Second slide"
                  height="500px"
                />

                <RBS.Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </RBS.Carousel.Caption>
              </RBS.Carousel.Item>
              <RBS.Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banImg3}
                  alt="Third slide"
                  height="500px"
                />
                <RBS.Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </RBS.Carousel.Caption>
              </RBS.Carousel.Item>
            </RBS.Carousel>
          </RBS.Col>
        </RBS.Row>
        <RBS.Row>
          <RBS.Col md={12} style={{ marginTop: '10px' }}>
            <h5>
              Find lawyers by categories &nbsp;
              <span style={{ fontSize: '12px' }}>
                <a href="javascript:;">View All</a>
              </span>
            </h5>
            <hr />
            <RBS.Row style={{ minHeight: '150px', padding: '15px 0px' }}>
              <RBS.Col
                xs={6}
                md={2}
                className="text-center"
                style={{ cursor: 'pointer' }}
              >
                <RBS.Image src={catImg} roundedCircle height="75" width="75" />
                <div style={{ fontSize: '12px' }}>Divorce Lawyer</div>
              </RBS.Col>
              <RBS.Col
                xs={6}
                md={2}
                className="text-center"
                style={{ cursor: 'pointer' }}
              >
                <RBS.Image src={catImg} roundedCircle height="75" width="75" />
                <div style={{ fontSize: '12px' }}>Property Lawyer</div>
              </RBS.Col>
              <RBS.Col
                xs={6}
                md={2}
                className="text-center"
                style={{ cursor: 'pointer' }}
              >
                <RBS.Image src={catImg} roundedCircle height="75" width="75" />
                <div style={{ fontSize: '12px' }}>Criminal Lawyer</div>
              </RBS.Col>
              <RBS.Col
                xs={6}
                md={2}
                className="text-center"
                style={{ cursor: 'pointer' }}
              >
                <RBS.Image src={catImg} roundedCircle height="75" width="75" />
                <div style={{ fontSize: '12px' }}>Civil Lawyer</div>
              </RBS.Col>
              <RBS.Col
                xs={6}
                md={2}
                className="text-center"
                style={{ cursor: 'pointer' }}
              >
                <RBS.Image src={catImg} roundedCircle height="75" width="75" />
                <div style={{ fontSize: '12px' }}>Consumer Court Lawyer</div>
              </RBS.Col>
              <RBS.Col
                xs={6}
                md={2}
                className="text-center"
                style={{ cursor: 'pointer' }}
              >
                <RBS.Image src={catImg} roundedCircle height="75" width="75" />
                <div style={{ fontSize: '12px' }}>Supreme Court Lawyers</div>
              </RBS.Col>
            </RBS.Row>
          </RBS.Col>

          <RBS.Col md={12} style={{ marginTop: '10px' }}>
            <h5>
              Our top lawyers &nbsp;
              <span style={{ fontSize: '12px' }}>
                <a href="javascript:;">View All</a>
              </span>
            </h5>
            <hr />
            <RBS.Row>
              <RBS.Col sm={12} md={3}>
                <RBS.Card>
                  <RBS.Card.Img variant="top" src={userImg} />
                  <RBS.Card.Body>
                    <RBS.Card.Title>
                      Adv. John Carter &nbsp;
                      <RBS.Badge
                        pill
                        variant="secondary"
                        style={{ fontSize: '12px' }}
                      >
                        <FontAwesomeIcon icon={faStar} /> 5{' '}
                      </RBS.Badge>
                    </RBS.Card.Title>
                    <RBS.Card.Text>
                      With winning percentage on over 88% John is an exceptional
                      lawyer who currently works in Supreme court.
                    </RBS.Card.Text>
                  </RBS.Card.Body>
                  <RBS.Card.Body style={{ fontSize: '14px' }}>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faEye} /> Visit profile
                    </RBS.Card.Link>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book appointment
                    </RBS.Card.Link>
                  </RBS.Card.Body>
                </RBS.Card>
              </RBS.Col>
              <RBS.Col sm={12} md={3}>
                <RBS.Card>
                  <RBS.Card.Img variant="top" src={userImg} />
                  <RBS.Card.Body>
                    <RBS.Card.Title>
                      Adv. John Carter &nbsp;
                      <RBS.Badge
                        pill
                        variant="secondary"
                        style={{ fontSize: '12px' }}
                      >
                        <FontAwesomeIcon icon={faStar} /> 5{' '}
                      </RBS.Badge>
                    </RBS.Card.Title>
                    <RBS.Card.Text>
                      With winning percentage on over 88% John is an exceptional
                      lawyer who currently works in Supreme court.
                    </RBS.Card.Text>
                  </RBS.Card.Body>
                  <RBS.Card.Body style={{ fontSize: '14px' }}>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faEye} /> Visit profile
                    </RBS.Card.Link>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book appointment
                    </RBS.Card.Link>
                  </RBS.Card.Body>
                </RBS.Card>
              </RBS.Col>
              <RBS.Col sm={12} md={3}>
                <RBS.Card>
                  <RBS.Card.Img variant="top" src={userImg} />
                  <RBS.Card.Body>
                    <RBS.Card.Title>
                      Adv. John Carter &nbsp;
                      <RBS.Badge
                        pill
                        variant="secondary"
                        style={{ fontSize: '12px' }}
                      >
                        <FontAwesomeIcon icon={faStar} /> 5{' '}
                      </RBS.Badge>
                    </RBS.Card.Title>
                    <RBS.Card.Text>
                      With winning percentage on over 88% John is an exceptional
                      lawyer who currently works in Supreme court.
                    </RBS.Card.Text>
                  </RBS.Card.Body>
                  <RBS.Card.Body style={{ fontSize: '14px' }}>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faEye} /> Visit profile
                    </RBS.Card.Link>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book appointment
                    </RBS.Card.Link>
                  </RBS.Card.Body>
                </RBS.Card>
              </RBS.Col>
              <RBS.Col sm={12} md={3}>
                <RBS.Card>
                  <RBS.Card.Img variant="top" src={userImg} />
                  <RBS.Card.Body>
                    <RBS.Card.Title>
                      Adv. John Carter &nbsp;
                      <RBS.Badge
                        pill
                        variant="secondary"
                        style={{ fontSize: '12px' }}
                      >
                        <FontAwesomeIcon icon={faStar} /> 5{' '}
                      </RBS.Badge>
                    </RBS.Card.Title>
                    <RBS.Card.Text>
                      With winning percentage on over 88% John is an exceptional
                      lawyer who currently works in Supreme court.
                    </RBS.Card.Text>
                  </RBS.Card.Body>
                  <RBS.Card.Body style={{ fontSize: '14px' }}>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faEye} /> Visit profile
                    </RBS.Card.Link>
                    <RBS.Card.Link href="#">
                      <FontAwesomeIcon icon={faCalendarAlt} /> Book appointment
                    </RBS.Card.Link>
                  </RBS.Card.Body>
                </RBS.Card>
              </RBS.Col>
            </RBS.Row>
          </RBS.Col>
        </RBS.Row>
      </RBS.Container>
    </div>
  );
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
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

export default compose(withConnect)(LandingPage);
