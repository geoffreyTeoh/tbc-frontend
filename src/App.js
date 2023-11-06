import './App.css';
import tbcphoto from './tbcphoto.png';

function App() {
  return (
    <div className="App">
      <header className="tbc-app-header" style={{ backgroundImage: `url(${tbcphoto})`}}>
        <div className="overlay">
          <p>Tuesday Badminton Comunity</p>
          <p className="tbc-tagline">Stay tuned for Our Major Announcement!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
