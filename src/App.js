import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from './components/Pages/Signup';
import Signin from './components/Pages/Signin';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
