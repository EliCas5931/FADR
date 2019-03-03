import React, { Component } from 'react';
import './home.css';

// import logo from './logo.svg';
import dogsBlur from '../../images/cleanringsdogs.png';
import donateIcon from '../../images/donate.png';
import pawPrint from '../../images/pawprint.png';
import volunteerIcon from '../../images/volunteer.png';

// import { Link } from 'react-router-dom';

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
              <p>Donate <img src={donateIcon} className='donateIcon' alt='Donate Icon' /></p>
            </div>
            <div className='col-5' id='adoptable'>
              <p>Adoptables <img src={pawPrint} className='pawPrint' alt='Paw Print' /></p>
            </div>
            <div className='col' id='volunteer'>
              <p>Volunteer <img src={volunteerIcon} className='volunteerIcon' alt='Volunteer Icon' /></p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
