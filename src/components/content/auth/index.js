import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './auth.scss'
import Login from './login'
import Register from './register'

function Auth (props) {
  const { auth } = props
  const wrappedLogin = props => {
    return <Login {...props} auth={auth} />
  }
  const wrappedRegister = props => {
    return <Register {...props} auth={auth} />
  }
  return (
    <Container>
      <div className='auth'>
        <Switch>
          <Route path={['/login']} component={wrappedLogin} />
          <Route path={['/register']} component={wrappedRegister} />
        </Switch>
      </div>
    </Container>
  )
}

export default Auth
