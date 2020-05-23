import React from 'react';
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";

const Header = ({ currentUser, initials }) => {

  let firstName = null;
  let lastName = null;

  if(initials){
    const fullName = initials.split(" ");
    firstName = fullName[0][0];
    lastName = fullName[1][0];

  }
  
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          Logo
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {
            initials 
              ? <div>
                {`${firstName}${lastName}`}
              </div>
              : null
          }
          
          {
            currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to="/signin">SIGN IN</Link>
          }
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Header)
