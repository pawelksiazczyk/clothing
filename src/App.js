import React from 'react';
import './App.css';
import Home from "./pages/homepage/Home";
import Shop from "./pages/shop/Shop";
import { Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import Sign from "./pages/sign/Sign";
import { auth } from "./firebase/firebase"

class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser:user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Sign} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
