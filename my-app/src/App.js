import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps.js';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mica" />
      <FunctionalGreetingWithProps greeting="Welcome back," name="Cameron" />
    </div>
  );
}

export default App;
