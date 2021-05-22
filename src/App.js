import logo from './logo.svg';
import './css/App.scss';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
        
        <div id="body_container">
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
          </Router>
        </div>
        <div className="cboth"></div>
      <Footer/>
    </div>
  );
}

export default App;
