import React from 'react';
import './App.css';
import Home from "./pages/homepage/Home";
import Shop from "./pages/shop/Shop"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
