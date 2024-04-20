<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './components/utils/appStore';

function App() {
  return (
    // <div className="App">
    <Provider store={appStore}>
   
     <Body/>
     </Provider>
  
    // </div>
=======
import logo from './logo.svg';
=======
>>>>>>> app first commit
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './components/utils/appStore';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> Initialize project using Create React App
=======
    <Provider store={appStore}>
   
    <Body/>
    </Provider>
>>>>>>> app first commit
  );
}

export default App;
