import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
