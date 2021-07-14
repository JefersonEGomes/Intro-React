import logo from './logo.svg';
import './App.css';
import Button from './components/Button'


function sum(a,b){
  return a + b
}

function primeiroJSX() {
  return(
    <div>
      Jeferson Ezequiel - Introdução ao ReactJS <br/>
      Soma : {sum(5,5)}
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {primeiroJSX()}
        <Button
        name="Jeferson"
        age="19"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
