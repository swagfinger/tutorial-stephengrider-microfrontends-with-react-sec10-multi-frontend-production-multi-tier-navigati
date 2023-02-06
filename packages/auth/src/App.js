import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin' component={Signin} />
            <Route path='/auth/signup' component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
