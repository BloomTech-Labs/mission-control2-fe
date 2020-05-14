import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import AppWithRouterAccess from './components/login/AppWithRouterAccess';
import Dash from './components/Dashboard/Dash';
import Modal from './components/Dashboard/modal'
const App = () => {
  return (
    
    <Router>
      {/* <AppWithRouterAccess /> */}
            <Dash/>
            <Modal/>
    </Router>
  );
}

export default App;