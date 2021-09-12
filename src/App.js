import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Signup from './screens/signup/Signup.js';
import Login from './screens/login/Login.js';
import Inside from './screens/inside/Inside.js';
import { store } from '../src/redux/configureStore.js'
import { Provider } from 'react-redux'
import React from 'react';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App font-face-gm">
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Inside />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
