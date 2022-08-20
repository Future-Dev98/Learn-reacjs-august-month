import logo from './logo.svg';
import './App.css';
import Count from './components/Count';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Count/>
      </header>
    </div>
  );
}

export default App;
