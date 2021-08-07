import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { GetAllActivities, GetAllRoutines, HomePage, RegisterUser, LoginUser, GetMyRoutines } from "./components";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')))
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);

  
  return (
    <Router>
      <div className="App">
          <Navbar 
          data = {data}
          />
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
          <Route path='/myroutines'>
            <GetMyRoutines 
            data = {data}
            setData = {setData}
            routines = {routines}
            setRoutines = {setRoutines}
            />
          </Route>
          <Route path='/register'>
            <RegisterUser
            
            />
          </Route>
          <Route path='/login'>
            <LoginUser
             
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
