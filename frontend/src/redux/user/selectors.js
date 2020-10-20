import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectUser = (state) => state.user || initialState;

const selectUserDetails = createSelector(selectUser, (substate) => substate);

const selectUserData = createSelector(
  selectUser,
  (substate) => substate.data.user,
);

const selectUpdatedUserData = createSelector(
  selectUser,
  (substate) => substate.data.userInfo,
);

const selectUserLoading = createSelector(
  selectUser,
  (substate) => substate.loading,
);

const selectUserError = createSelector(
  selectUser,
  (substate) => substate.error,
);

export default selectUserDetails;
export {
  selectUpdatedUserData,
  selectUserDetails,
  selectUserData,
  selectUserLoading,
  selectUserError,
};
