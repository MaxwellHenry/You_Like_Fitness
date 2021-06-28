import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { GetAllActivities, GetAllRoutines, HomePage, RegisterUser } from "./components";
import Navbar from "./components/Navbar";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);

  return (
    <Router>
      <div className="App">
          <Navbar />
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>
          <Route path="/activities">
            <GetAllActivities
              activities={activities}
              setActivities={setActivities}
            />
          </Route>
          <Route path="/routines">
            <GetAllRoutines
              routines={routines}
              setRoutines={setRoutines}
            />
          </Route>
          {/* <Route path='/register'>
            <RegisterUser />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
