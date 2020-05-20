import React from 'react';
import './App.css';
import Home from "./pages/homepage/Home";
import Shop from "./pages/shop/Shop";
import { Route, Switch } from "react-router-dom";
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
