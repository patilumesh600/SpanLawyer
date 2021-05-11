/**
 *
 * Filters
 *
 */

import React from 'react';

import * as RBS from 'react-bootstrap';
import {
  faEye,
  faCalendarAlt,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Filters() {
  return (
    <div style={{ paddingTop: '15px', color: '#8c8c8c' }}>
      <h5>
        <FontAwesomeIcon icon={faFilter} /> Filters
      </h5>
      <hr />
      <div>
        <h6>
          By Categories{' '}
          <small className="pullRight">
            {' '}
            <a href="javascript:;">View All</a>
          </small>
        </h6>
        <input
          type="checkbox"
          id="fltCat1"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat1"> &nbsp; Civil And Property</label>
        <br />
        <input
          type="checkbox"
          id="fltCat2"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat2"> &nbsp; Family And Matrimony Advice</label>
        <br />
        <input
          type="checkbox"
          id="fltCat3"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat3"> &nbsp; Banking And Corporate Matters</label>
        <br />
        <input
          type="checkbox"
          id="fltCat4"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat4"> &nbsp; Employment And Labor Matters</label>
        <br />
      </div>
      <div style={{ marginTop: '10px' }}>
        <h6>
          By Type{' '}
          <small className="pullRight">
            {' '}
            <a href="javascript:;">View All</a>
          </small>
        </h6>
        <input
          type="checkbox"
          id="fltCat1"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat1"> &nbsp; Property Issue</label>
        <br />
        <input
          type="checkbox"
          id="fltCat2"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat2"> &nbsp; Family And Inheritance Issue</label>
        <br />
        <input
          type="checkbox"
          id="fltCat3"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat3"> &nbsp; Consumer Court Issue</label>
        <br />
        <input
          type="checkbox"
          id="fltCat4"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat4"> &nbsp; Accident And Insurance Issue</label>
        <br />
        <input
          type="checkbox"
          id="fltCat4"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat4"> &nbsp; Supreme Court Matter</label>
        <br />
      </div>

      <div style={{ marginTop: '10px' }}>
        <h6>
          By Ratings{' '}
          <small className="pullRight">
            {' '}
            <a href="javascript:;">View All</a>
          </small>
        </h6>
        <input
          type="checkbox"
          id="fltCat1"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat1">
          {' '}
          &nbsp; <FontAwesomeIcon icon={faStar} />
        </label>
        <br />
        <input
          type="checkbox"
          id="fltCat2"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat2">
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
        </label>
        <br />
        <input
          type="checkbox"
          id="fltCat3"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat3">
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
        </label>
        <br />
        <input
          type="checkbox"
          id="fltCat4"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat4">
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
        </label>
        <br />
        <input
          type="checkbox"
          id="fltCat4"
          name="FilterByCategory"
          value="Flt1"
        />
        <label htmlFor="fltCat4">
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
          &nbsp; <FontAwesomeIcon icon={faStar} />
        </label>
        <br />
      </div>
    </div>
  );
}

Filters.propTypes = {};

export default Filters;
