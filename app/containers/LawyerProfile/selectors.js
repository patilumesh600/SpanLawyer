import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lawyerProfile state domain
 */

const selectLawyerProfileDomain = state => state.lawyerProfile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LawyerProfile
 */

const makeSelectLawyerProfile = () =>
  createSelector(
    selectLawyerProfileDomain,
    substate => substate,
  );

export default makeSelectLawyerProfile;
export { selectLawyerProfileDomain };
