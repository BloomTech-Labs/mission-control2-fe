import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './components/login/AppWithRouterAccess';
// import Dash from './components/Dashboard/Dash';
import theme from './components/MaterialUI/theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppWithRouterAccess />
      </ThemeProvider>
    </Router>
  );
}

export default App;