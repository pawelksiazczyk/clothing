import React from 'react';
import './App.css';
import Home from "./pages/homepage/Home";
import Shop from "./pages/shop/Shop";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './components/header/Header';
import Sign from "./pages/sign/Sign";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { userAction } from "./redux/user/userActions"

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          this.props.setUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        
      } else {
        this.props.setUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    let initials = null;
    if (this.props.user){
      initials = this.props.user.displayName;
    }
    return (
      <div>
        <Header initials={initials}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render={() => this.props.user ? (<Redirect to="/"/>) : (<Sign/>)} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {dispatch(userAction(user))}
  }
}
const mapStateToProps = (state) => {
  return {
   user: state.user.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
