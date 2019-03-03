import React, { Component } from 'react';
import './home.css';
// import logo from './logo.svg';
import dogsBlur from '../../images/bestblurdogs.png';

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <img src={dogsBlur} className='dogsImage' alt='Dogs' />
          </div>
        </div>
          <div className='row align-items-center' id='DAV'>
            <div className='col' id='donate'>
              <p>Donate</p>
            </div>
            <div className='col-5' id='adoptable'>
              <p>Adoptable</p>
            </div>
            <div className='col' id='volunteer'>
              <p>Volunteer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
