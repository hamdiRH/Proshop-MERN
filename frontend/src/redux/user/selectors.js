import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectAuth = (state) => state.auth || initialState;

const selectAuthInfo = createSelector(selectAuth, (substate) => substate);

const selectAuthData = createSelector(
  selectAuth,
  (substate) => substate.data.userInfo,
);

const selectAuthLoading = createSelector(
  selectAuth,
  (substate) => substate.loading,
);

const selectAuthError = createSelector(
  selectAuth,
  (substate) => substate.error,
);

export default selectAuthInfo;
export {
  selectAuthInfo,
  selectAuthData,
  selectAuthLoading,
  selectAuthError,
};
