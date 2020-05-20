import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dash from './components/Dashboard/Dash';
import Register from './components/registrationForm/Register';
import theme from './components/MaterialUI/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Login from '../src/components/login/Login'
const App = () => {
  return (

    <Router>
      <ThemeProvider theme={theme}>
        {/* <Route path='/' exact={true} component={Home} /> */}
        <Route path='/dashboard/:id' component={Dash} />
        <Route
          path='/login'
          render={() => (
            <Login />
          )} />
        <Route path='/register' component={Register} />
      </ThemeProvider>
    </Router>
  );
}

export default App;