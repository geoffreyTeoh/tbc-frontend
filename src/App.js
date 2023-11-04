import './App.css';
import tbcphoto from './tbcphoto.png';

function App() {
  return (
    <div className="App">
      <header className="tbc-app-header" style={{ backgroundImage: `url(${tbcphoto})`}}>
        <div className="overlay">
          <p>Stay Tuned for Our Big Reveal</p>
        </div>
      </header>
    </div>
  );
}

export default App;
