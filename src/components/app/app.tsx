import * as React from 'react';
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '../../pages/main-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={MainPage} />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
