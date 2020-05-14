import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react'
import Home from './Home'
import Login from './Login'
import Dash from '../Dashboard/Dash'
import Protected from './Protected'
const AppWithRouterAccess = () => {
  const history = useHistory()
  const onAuthRequired = () => {
    history.push('/login')
  }
  //creates a secure route at localhost, along with a client id. subject to change
  //if it works, pushes you to implicit callback
  //makes it required to have authorization
  //then routing. could be condensed if needed and just shoved in app.js TBH.
  return (
    <Security
      issuer='https://dev-955052.okta.com/oauth2/default'
      clientId='0oabxhxxeiHbyU0C54x6'
      redirectUri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <Route path='/' exact={true} component={Home} />
      <SecureRoute path='/dashboard' component={Dash} />
      <Route
        path='/login'
        render={() => (
          <Login issuer='https://dev-955052.okta.com/oauth2/default' />
        )}
      />
      <Route path='/implicit/callback' component={LoginCallback} />
    </Security>
  )
}
export default AppWithRouterAccess
