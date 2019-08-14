import {
  FETCHING,
  FETCHING_POST_SUCCESS,
  FETCHING_POST_FAILURE
} from './actions'

const initialState = {
  post: [],
  isLoading: true,
  error: {}
}
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POST_SUCCESS:
      return { ...state, post: action.payload, isLoading: false }
    case FETCHING_POST_FAILURE:
      return { ...state, error: action.payload, isLoading: false }
    case FETCHING:
      return { ...state, isLoading: true }
    default:
      return state
  }
}
