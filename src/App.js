import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AppWithRouterAccess from './components/login/AppWithRouterAccess';
import Dash from './components/Dashboard/Dash';
import Register from './components/registrationForm/Register';
import theme from './components/MaterialUI/theme';
import { ThemeProvider } from '@material-ui/core/styles';
const App = () => {
  return (
    
    <Router>
      <ThemeProvider theme={theme}>
        {/* <AppWithRouterAccess /> */}
        {/* <Route path='/' exact={true} component={Home} /> */}
        <Route path='/dashboard/:id' component={Dash} />
        {/* <Route
                path='/login'
                render={() => (
                    <Login issuer='https://dev-955052.okta.com/oauth2/default' />
                )}/> */}
        <Route path='/register' component={Register} />
      </ThemeProvider>
    </Router>
  );
}

export default App;