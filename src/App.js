import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductDash from './components/ProductsList/ProductDash';
import ProjectDash from './components/ProjectList/ProjectDash';
import Dash from './components/Dashboard/Dash';
import Register from './components/registrationForm/Register';
import theme from './components/MaterialUI/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Login from '../src/components/login/Login'
const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route path='/dashboard/:id' component={Dash} />
        <Route path='/program/:id' component={ProductDash} />
        <Route path='/product/:id' component={ProjectDash} />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
      </ThemeProvider>
    </Router>
  );
}
export default App;