import {
  FETCHING,
  FETCHING_POST_SUCCESS,
  FETCHING_POST_FAILURE,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAILURE,
} from "./actions";

const initialState = {
  post: {},
  posts: [],
  isLoading: true,
  error: "",
  meta: { page: 1, count: 0, perPage: 3 },
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POST_SUCCESS:
      return { ...state, post: action.payload, error: "", isLoading: false };
    case FETCHING_POST_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case FETCHING_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.post,
        meta: action.payload.meta,
        error: "",
        isLoading: false,
      };
    case FETCHING_POSTS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case FETCHING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
