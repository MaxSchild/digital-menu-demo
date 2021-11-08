import React from 'react';
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

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Router>
        <Routes>
          <Route path="/menus" element={<Menus />}>

          </Route>
          <Route path="/dishes" element={<Dishes />}>

          </Route>
          <Route path="/dish-detail" element={<DishDetail />}>

          </Route>
        </Routes>
      </Router>


    </div>
  );
};

export default App;