/**
 *
 * ScheduleAppointment
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import {
  faPhoneVolume,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ScheduleAppointment() {
  return (
    <div>
      <RBS.Container fluid>
        <RBS.Row
          style={{
            border: '1px solid #ffc107',
            minHeight: '400px',
            padding: '15px 0px',
          }}
        >
          <RBS.Col md={12}>
            <h4 className="text-center">Book A Visit</h4>
            <hr style={{ marginTop: '2px', borderTop: '2px solid #ffc107' }} />
            <RBS.Form>
              <RBS.Form.Group
                controlId="formGroupEmail"
                style={{ marginBottom: '5px' }}
              >
                <RBS.Form.Label style={{ fontWeight: '500' }}>
                  Appointment Date
                </RBS.Form.Label>
                <RBS.Form.Control
                  type="email"
                  placeholder="Appointment Date"
                  size="sm"
                />
              </RBS.Form.Group>
              <RBS.Form.Group
                controlId="formGroupEmail"
                style={{ marginBottom: '5px' }}
              >
                <RBS.Form.Label style={{ fontWeight: '500' }}>
                  Case Number
                </RBS.Form.Label>
                <RBS.Form.Control
                  type="email"
                  placeholder="Case Number"
                  size="sm"
                />
              </RBS.Form.Group>
              <RBS.Form.Group
                controlId="formGroupPassword"
                style={{ marginBottom: '5px' }}
              >
                <RBS.Form.Label style={{ fontWeight: '500' }}>
                  Time
                </RBS.Form.Label>
                <br />
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  9.00 AM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  9.30 AM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  10.00 AM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  10.30 AM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  11.00 AM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  11.30 AM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="secondary"
                  style={{ fontWeight: 'normal', fontSize: '14px' }}
                >
                  12.00 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  12.30 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  01.00 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  01.30 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  02.00 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  02.30 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  03.00 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  03.30 PM
                </RBS.Badge>{' '}
                &nbsp;
                <RBS.Badge
                  pill
                  variant="warning"
                  style={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    background: '#fff',
                    border: '1px solid #ffc107',
                  }}
                >
                  04.00 PM
                </RBS.Badge>{' '}
                &nbsp;
              </RBS.Form.Group>
              <RBS.Form.Group
                controlId="exampleForm.ControlSelect1"
                style={{ marginBottom: '5px' }}
              >
                <RBS.Form.Label style={{ fontWeight: '500' }}>
                  Case Type
                </RBS.Form.Label>
                <RBS.Form.Control as="select" size="sm">
                  <option>Select</option>
                  <option>Divorce/Matrimonial Issue</option>
                  <option>Property Issue</option>
                  <option>Family And Inheritance Issue</option>
                  <option>Employment Issue</option>
                  <option>Criminal Issue</option>
                </RBS.Form.Control>
              </RBS.Form.Group>
              <RBS.Form.Group
                controlId="exampleForm.ControlTextarea1"
                style={{ marginBottom: '5px' }}
              >
                <RBS.Form.Label style={{ fontWeight: '500' }}>
                  Case Description
                </RBS.Form.Label>
                <RBS.Form.Control as="textarea" rows={3} />
              </RBS.Form.Group>
              <RBS.Row
                style={{ marginTop: '10px' }}
                className="justify-content-md-center"
              >
                <RBS.Col md={5}>
                  {' '}
                  <RBS.Button variant="warning" type="button" size="sm" block>
                    {' '}
                    <FontAwesomeIcon icon={faCalendarCheck} /> Schedule Visit
                  </RBS.Button>
                </RBS.Col>
                <RBS.Col md={5}>
                  <RBS.Button variant="secondary" type="button" size="sm" block>
                    {' '}
                    <FontAwesomeIcon icon={faPhoneVolume} /> Ask for Callback{' '}
                  </RBS.Button>
                </RBS.Col>
              </RBS.Row>
            </RBS.Form>
          </RBS.Col>
        </RBS.Row>
      </RBS.Container>
    </div>
  );
}

ScheduleAppointment.propTypes = {};

export default ScheduleAppointment;
