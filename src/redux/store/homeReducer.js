import { homeConstants } from 'redux/constants'
import { set } from 'lodash'
// import { authActions } from 'redux/actions';

const initialState = {
  homes: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case homeConstants.SAVE_HOME_INFORMATION: {
      const newState = {...state};
      const increase = newState.homes + 1;
      return set(newState, 'homes', increase);
    }
    default:
      return state;
  }

};
export default reducer;