import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar.component";
import TripList from "./components/trip-list.component";
import CreateTrip from "./components/create-trip.component";
import EditTrip from "./components/edit-trip.component";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <br></br>
      <Route path="/" exact component={TripList}></Route>
      <Route path="/create" component={CreateTrip}></Route>
      <Route path="/edit/id" component={EditTrip}></Route>
    </Router>

  );
}

export default App;
