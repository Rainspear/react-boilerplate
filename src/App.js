import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import {routes} from 'routes/routes';

function App() {
  return (
    <div className="App">
      <Switch>
          {routes.map((route, i) =>
            <Route key={i} exact={route.subRoutes.some(r => r.exact)} path={route.subRoutes.map(r => r.path)}>
              <route.layout>
                {route.subRoutes.map((subRoute, i) =>
                  <Route key={'route' + i} {...subRoute}></Route>
                )}
              </route.layout>
            </Route>
          )}
        </Switch>
    </div>
  );
}

export default App;
