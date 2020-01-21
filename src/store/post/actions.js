import { Api } from "../../utils";

export const FETCHING = "FETCHING_POSTS";
export const FETCHING_POST_SUCCESS = "FETCHING_POST_SUCCESS";
export const FETCHING_POST_FAILURE = "FETCHING_POST_FAILURE";
export const FETCHING_POSTS_SUCCESS = "FETCHING_POSTS_SUCCESS";
export const FETCHING_POSTS_FAILURE = "FETCHING_POSTS_FAILURE";

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const api = ({ type, postId, data }) => dispatch => {
  dispatch(fetching());
  switch (type) {
    case Api.apiMethods.GET_POSTS:
      (() => {
        Api.postApi
          .getPosts(data)
          .then(data => {
            dispatch(fetchPostsSuccess(data));
          })
          .catch(data => {
            dispatch(fetchPostsFailure(data));
          });
      })();
      break;
    case Api.apiMethods.GET_POST:
      (() => {
        Api.postApi
          .getPost(postId)
          .then(data => {
            dispatch(fetchPostSuccess(data));
          })
          .catch(data => {
            dispatch(fetchPostFailure(data));
          });
      })();
      break;
    case Api.apiMethods.POST_POST:
      (() => {
        Api.postApi
          .addPost(data)
          .then(data => {
            dispatch(addPostSuccess(data));
          })
          .catch(data => {
            dispatch(addPostFailure(data));
          });
      })();
      break;
    case Api.apiMethods.PUT_POST:
      (() => {
        Api.postApi
          .editPost(postId, data)
          .then(data => {
            dispatch(fetchPostSuccess(data));
          })
          .catch(data => {
            dispatch(fetchPostFailure(data));
          });
      })();
      break;
    case Api.apiMethods.DELETE_POST:
      (() => {
        Api.postApi
          .deletePost(postId)
          .then(data => {
            dispatch(fetchPostSuccess(data));
          })
          .catch(data => {
            dispatch(fetchPostFailure(data));
          });
      })();
      break;
    case Api.apiMethods.POST_COMMENT:
      (() => {
        Api.postApi
          .addComment(data)
          .then(data => {
            const comment = {
              comments: { _comment: data.data._id },
            };
            Api.postApi.addCommentToPost(postId, comment).then(data => {
              dispatch(fetchPostSuccess(data));
            });
          })
          .catch(data => {
            dispatch(fetchPostFailure(data));
          });
      })();
      break;
    default:
      console.log("RABOTAY SUKA");
  }
};

const addPostSuccess = data => ({
  type: ADD_POST_SUCCESS,
  payload: data.data,
});
const addPostFailure = data => ({
  type: ADD_POST_FAILURE,
  payload: data.message,
});

const fetchPostSuccess = data => ({
  type: FETCHING_POST_SUCCESS,
  payload: data.data,
});
const fetchPostFailure = data => ({
  type: FETCHING_POST_FAILURE,
  payload: data.message,
});
const fetchPostsSuccess = data => ({
  type: FETCHING_POSTS_SUCCESS,
  payload: data.data,
});
const fetchPostsFailure = data => ({
  type: FETCHING_POSTS_FAILURE,
  payload: data.message,
});

const fetching = () => ({ type: FETCHING });

export default { api };
