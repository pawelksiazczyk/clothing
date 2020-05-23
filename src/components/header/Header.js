import React from 'react';
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown"

const Header = ({ currentUser, initials, hidden }) => {
  let firstName = null;
  let lastName = null;

  if (initials) {
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
        {initials ? <div>{`${firstName}${lastName}`}</div> : null}

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
  }
}

export default connect(mapStateToProps)(Header)
