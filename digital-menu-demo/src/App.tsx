import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Menus from './pages/Menus';
import Dishes from './pages/Dishes';
import DishDetail from './pages/DishDetail';
import MenuAppBar from './components/MenuAppBar';

import { Fragment } from 'react';
import ReduxExample from './pages/ReduxExample';

//not relevant for our use case
let isInitial = true;

//TODO change the logic to fetch data correctly
//TODO show correct data at /menus
//TODO create action thunk

function App() {

  return (
    <div className="App">
      <MenuAppBar />
      <Router>
        <Routes>
          <Route path="/menus" element={<Menus />}>

          </Route>
          <Route path="/dishes/:menuid" element={<Dishes />}>

          </Route>
          <Route path="/dish-detail/:menuid/:dishid" element={<DishDetail />}>

          </Route>
          <Route path="/redux-example" element={<ReduxExample />}>

          </Route>
        </Routes>
      </Router>


    </div>
  );
};

export default App;