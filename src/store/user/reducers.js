import {
  FETCHING,
  FETCHING_USER_DATA_SUCCESS,
  FETCHING_USER_DATA_FAILURE,
} from "./actions";

const initialState = {
  user: {},
  isAuth: !!document.cookie,
  isLoading: false,
  error: {},
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        isLoading: false,
        error: {},
      };
    case FETCHING_USER_DATA_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        isAuth: false,
        isLoading: false,
      };

    case FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
