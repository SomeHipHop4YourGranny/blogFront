import { Cookie } from '../../utils'

export const FETCHING = 'FETCHING_USERS'
export const FETCHING_USER_DATA_SUCCESS = 'FETCHING_USER_DATA_SUCCESS'
export const FETCHING_USER_DATA_FAILURE = 'FETCHING_USER_DATA_FAILURE'

const auth = ({ Api, Data }) => dispatch => {
  dispatch(fetching())
  console.log(Api)
  return Api(Data)
    .then(data => {
      console.log(data)
      dispatch(fetchUserDataSuccess(data.data.message))
    })
    .catch(data => {
      dispatch(fetchUserDataFailure(data.data))
    })
}

const fetchUserDataSuccess = data => ({
  type: FETCHING_USER_DATA_SUCCESS,
  payload: data
})
const fetchUserDataFailure = data => {
  Cookie.deleteCookie('connect.sid')
  return { type: FETCHING_USER_DATA_FAILURE, payload: data }
}

const fetching = () => ({ type: FETCHING })

export default { auth }
