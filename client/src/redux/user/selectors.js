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

const selectUsersList = createSelector(
  selectUser,
  (substate) => substate.data.usersList,
);

const selectDeleteUser = createSelector(
  selectUser,
  (substate) => substate.data.deleteUser,
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
  selectDeleteUser,
  selectUserLoading,
  selectUserError,
  selectUsersList
};
