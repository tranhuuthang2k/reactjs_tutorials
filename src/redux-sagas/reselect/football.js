import { createSelector } from "reselect";

// lay toan bo state trong reducer store
const stateFootball = (state) => state.football; // callback

// lay state can dung
export const getStateLoading = createSelector(
  stateFootball,
  (item) => item.loading
);

export const getStateDataFootball = createSelector(
  stateFootball,
  (item) => item.football
);
