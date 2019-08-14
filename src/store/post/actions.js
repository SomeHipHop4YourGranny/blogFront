export const FETCHING = "FETCHING_USERS";
export const FETCHING_POST_SUCCESS = "FETCHING_POST_SUCCESS";
export const FETCHING_POST_FAILURE = "FETCHING_POST_FAILURE";

const fetchPost = ({ Api, Id }) => dispatch => {
  dispatch(fetching());
  return Api(Id)
    .then(data => {
      console.log(data);
      dispatch(fetchPostSuccess(data.data));
    })
    .catch(data => {
      console.log(data);
      dispatch(fetchPostFailure(data.data));
    });
};

const fetchPostSuccess = data => ({
  type: FETCHING_POST_SUCCESS,
  payload: data,
});
const fetchPostFailure = data => ({
  type: FETCHING_POST_FAILURE,
  payload: data,
});

const fetching = () => ({ type: FETCHING });

export default { fetchPost };
