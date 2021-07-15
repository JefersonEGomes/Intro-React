import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import ComponentA from './components/ComponentA/ComponentA'
import ComponentB from './components/ComponentB/ComponentB'


function sum(a, b) {
  alert(a + b)
}

function primeiroJSX() {
  return (
    <div>
      Jeferson Ezequiel - Introdução ao ReactJS (JSX)<br />
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {primeiroJSX()}
        <ComponentA>
          <ComponentB>
            <Button
              name="Jeferson (props)"
              onClick={() => sum(5, 5)}
              age="19"
            />
          </ComponentB>
        </ComponentA>
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
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
