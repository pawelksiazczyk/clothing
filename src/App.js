import React from 'react';
import './App.css';
import Home from "./pages/homepage/Home";
import Shop from "./pages/shop/Shop";
import { Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import Sign from "./pages/sign/Sign";
import { auth, createUserProfileDocument } from "./firebase/firebase"

class App extends React.Component {

  state = {
    currentUser: null
  }

 
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        
      } else {
        this.setState({currentUser: null})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    let initials = null;
    if (this.state.currentUser){
      initials = this.state.currentUser.displayName;
    }
    return (
      <div>
        <Header currentUser={this.state.currentUser} initials={initials}/>
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
