import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productResults state domain
 */

const selectProductResultsDomain = state =>
  state.productResults || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductResults
 */

const makeSelectProductResults = () =>
  createSelector(
    selectProductResultsDomain,
    substate => substate,
  );

export default makeSelectProductResults;
export { selectProductResultsDomain };
