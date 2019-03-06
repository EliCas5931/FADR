import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import './home.css';

// import logo from './logo.svg';
import dogsBlur from '../../images/cleanringsdogs.png';



class HomePage extends Component {
  render() {
    return (
      <div className='home'>
            <img src={dogsBlur} className='dogsImage' alt='Dogs' />
      </div>
    );
  }
}

export default HomePage;
