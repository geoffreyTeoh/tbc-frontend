import * as React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/niu-logo-gray.svg';

const NotFoundPage = () => (
  <div className="d-flex flex-column w-100 align-items-center text-gray">
    <div className="my-5" />
    <div className="my-4" />
    {/* <img src={logo} alt="logo" className="no-task-screen-icon" /> */}
    <div className="my-3" />
    <div className="multiline text-center">
     Not Found
    </div>
    <div className="my-3">
      <a className="text-blue" href="/">Go back</a>
      <Link className="pl-3 text-blue" to="/auth/sign-in?from=logout">Sign Out</Link>
    </div>
  </div>
);

export default NotFoundPage;
