import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
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
=======
import Button from './components/Button'


function sum(a,b){
  return a + b
}

function primeiroJSX() {
  return(
    <div>
      Jeferson Ezequiel - Introdução ao ReactJS <br/>
      Soma : {sum(5,5)}
>>>>>>> b7a6a225448879b6fd3a5df7dcdc9802822235a2
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {primeiroJSX()}
<<<<<<< HEAD
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
=======
        <Button
        name="Jeferson"
        age="19"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
>>>>>>> b7a6a225448879b6fd3a5df7dcdc9802822235a2
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
