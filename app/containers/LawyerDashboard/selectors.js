import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lawyerDashboard state domain
 */

const selectLawyerDashboardDomain = state =>
  state.lawyerDashboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LawyerDashboard
 */

const makeSelectLawyerDashboard = () =>
  createSelector(
    selectLawyerDashboardDomain,
    substate => substate,
  );

export default makeSelectLawyerDashboard;
export { selectLawyerDashboardDomain };
