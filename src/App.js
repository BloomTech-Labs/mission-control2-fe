import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './components/login/AppWithRouterAccess';
const App = () => {
  return (
    <Router>
      <AppWithRouterAccess />
    </Router>
  );
}

export default App;