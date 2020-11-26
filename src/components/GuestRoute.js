import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

const GuestRoute = ({ component: Component, ...rest }) => {

    // const token = cookie.get("token");
    console.log('RESSS' , rest.loggedIn)
    console.log({...rest})

  return (
    <Route
      {...rest}
      render={props =>
        !rest.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/profile",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};
export default connect(mapStateToProps)(GuestRoute);