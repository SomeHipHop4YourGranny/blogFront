import { Cookie, Api } from "../../utils";

export const FETCHING = "FETCHING_USERS";
export const FETCHING_USER_DATA_SUCCESS = "FETCHING_USER_DATA_SUCCESS";
export const FETCHING_USER_DATA_FAILURE = "FETCHING_USER_DATA_FAILURE";

const api = ({ type, id, data }) => dispatch => {
  dispatch(fetching());

  switch (type) {
    case Api.apiMethods.LOGIN:
      return new Promise((resolve, reject) => {
        Api.userApi
          .signIn(data)
          .then(data => {
            dispatch(fetchUserDataSuccess(data.data.message));
            resolve("ok");
          })
          .catch(data => {
            console.log(data);
            reject(data.message);
            dispatch(fetchUserDataFailure(data));
          });
      });

    case Api.apiMethods.REGISTER:
      return new Promise((resolve, reject) => {
        Api.userApi
          .signUp(data)
          .then(data => {
            dispatch(fetchUserDataSuccess(data.data.message));
            resolve("ok");
          })
          .catch(data => {
            reject(data.message);
            dispatch(fetchUserDataFailure(data));
          });
      });

    case Api.apiMethods.CHECK_AUTH:
      (() => {
        Api.userApi
          .getUserIdFromCookies()
          .then(id => {
            return id.data.user;
          })
          .then(id => {
            Api.userApi.userData(id).then(data => {
              dispatch(fetchUserDataSuccess(data.data));
            });
          })
          .catch(data => {
            dispatch(fetchUserDataFailure(data));
          });
      })();
      break;
    default:
      console.log("RABOTAY SUKA");
  }
};

const fetchUserDataSuccess = data => ({
  type: FETCHING_USER_DATA_SUCCESS,
  payload: data,
});
const fetchUserDataFailure = data => {
  Cookie.deleteCookie("connect.sid");
  return { type: FETCHING_USER_DATA_FAILURE, payload: data };
};

const fetching = () => ({ type: FETCHING });

export default { api };
