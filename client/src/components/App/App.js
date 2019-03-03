import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';

// Components
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

// Page routes
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Events from '../../pages/Events/Events';
import Contact from '../../pages/Contact/Contact';
import Application from '../../pages/Application/Application';

// Jeff's routes
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Secret from '../../pages/Secret/Secret';
import Register from '../../pages/Register/Register';

// I'm adding this so I can see my addition
import Footer from '../../components/Footer/Footer';
// May not need to do this here?
// import About from '../../pages/About/About';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }
    }
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />
          {/* This may be why it will not fill full page */}
          <div className='mainBody'>
            <Switch>
              {/* Need to route our pages! */}
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute exact path='/secret' component={Secret} />
              <Route exact path='/about' component={About} />
              {/* These are our pages besides not found */}
              <Route exact path='/events' component={Events} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/application' component={Application} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <footer>
            <Footer />
        </footer>
      </AuthContext.Provider>
    );
  }
}

export default App;
