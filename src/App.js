
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav-bar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import PublicPage from './components/public-page';
import SignIn from './components/sign-in';
import Home from './components/home';

class App extends Component {
  state = { 
    authUser: true
   }
  render() { 
    return ( 
      <Router>
        <div>
          <NavBar />
          <hr />
          <Route path='/public-page' component= {PublicPage} />
          <Route path='/sign-in' component= {SignIn} />
          <Route exact path='/' component={Home} />

        </div>
      </Router>

     );
  }
}
 
export default App;