import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Logo from './components/Logo';

function App() {
  return (
    <Router>
    <div className="App">
    
      {/* <Home /> */}
      <Switch>
          <Route exact path="/" component={Home} />
        <Route exact path='/Logo' component={Logo} />
    </Switch>
     
    </div>
    </Router>
  );
}

export default App;
