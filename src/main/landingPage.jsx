import * as React from 'react';
import tbcphoto from '../tbcphoto.png';

// import logo from '../../assets/niu-logo-gray.svg';

const LandingPage = () => (
    <div className="App">
    <header className="tbc-app-header" style={{ backgroundImage: `url(${tbcphoto})`}}>
      <div className="overlay">
        <p>Tuesday Badminton Comunity</p>
        <p className="tbc-tagline">Stay tuned for Our Major Announcement!</p>
      </div>
    </header>
  </div>
);

export default LandingPage;
