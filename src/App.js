import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './components/utils/appStore';
import Browser from './components/Browser';

function App() {
  return (
    <Provider store={appStore}>
   
    <Body/>
 
    </Provider>
  );
}

export default App;
