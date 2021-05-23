import { useEffect } from 'react';
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

import {get_JWT_token} from './utils/utils.js'

import {reactLocalStorage} from 'reactjs-localstorage';


function App() {
  reactLocalStorage.set('JWT-token',process.env.REACT_APP_JWT_TOKEN);

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
