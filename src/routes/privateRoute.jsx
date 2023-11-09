import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  isInitCompleted,
  isLoggedIn,
  component: Component,
  ...otherProps
}) => {
  if (!isInitCompleted) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect to="/auth/sign-in?from=logout" />;
  }

  return (
    <Route
      {...otherProps}
      render={props => <Component {...props} />}
    />
  );
};

PrivateRoute.propTypes = {
  isInitCompleted: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  children: PropTypes.any,
  component: PropTypes.any,
};

const mapStateToProps = (state, parentProps) => ({
  isInitCompleted: state.context.app.isInitCompleted,
  isLoggedIn: !!state.persist.token,
  children: parentProps.children,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
