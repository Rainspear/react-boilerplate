/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from "connected-react-router/immutable";
import { combineReducers } from "redux-immutable";

import history from "utils/history";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
