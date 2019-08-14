import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'components/content/auth'
import { userActions } from 'store/actions'

function AuthContainer (props) {
  const { auth } = props
  const handleSubmit = ({ Api, login, password, email }) => {
    const Data = { login, password, email }
    auth({ Api, Data })
  }
  return <Auth auth={handleSubmit} />
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ auth: userActions.auth }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)
