import React, { useState, useEffect } from 'react';
import{BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Categories from './Components/categories/Categories'
import AddCategory from './Components/categories/AddCategory'
import Vehicles from './Components/vehicles/Vehicles'
import AddVehicle from './Components/vehicles/AddVehicle'
import Home from './Components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/categories" exact component={Categories}/>
        <Route path="/addCategoty" exact component={AddCategory}/>
        <Route path="/vehicles" exact component={Vehicles}/>
        <Route path="/addVehicles" exact component={AddVehicle}/>
      </Switch>
    </Router>
  );
}

export default App;
