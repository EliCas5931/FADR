import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './home.css';

// import logo from './logo.svg';
import dogsBlur from '../../images/cleanringsdogs.png';
import donateIcon from '../../images/donate.png';
import pawPrint from '../../images/pawprint.png';
import volunteerIcon from '../../images/volunteer.png';


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
              <Link className='link' to='/donate'>Donate <img src={donateIcon} className='donateIcon' alt='Donate Icon' /></Link>
            </div>
            <div className='col-5' id='adoptable'>
              <Link className='link' to='/adoptables'>Adoptables <img src={pawPrint} className='pawPrint' alt='Paw Print' /></Link>
            </div>
            <div className='col' id='volunteer'>
              <Link className='link' to='/volunteer'>Volunteer <img src={volunteerIcon} className='volunteerIcon' alt='Volunteer Icon' /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
