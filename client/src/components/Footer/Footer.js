import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

// CSS for page
import './footer.css';

// Images used in footer
import fbIcon from './fb.png';
import instaIcon from './insta.png';

import donateIcon from '../../images/donate.png';
import pawPrint from '../../images/pawprint.png';
import volunteerIcon from '../../images/volunteer.png';

class Footer extends Component {
    static contextType = AuthContext;

    render() {
        // const { user } = this.context;
        // Not sure if targetClass is needed? or what it is

        return (
            <div className='footerContents'>

                <div className='row align-items-center' id='DAV'>
                    <div className='col-3' id='donate'>
                        <Link className='link' to='/donate'>Donate <img src={donateIcon} className='donateIcon' alt='Donate Icon' /></Link>
                    </div>
                    <div className='col-6' id='adoptable'>
                        <Link className='link' to='/adoptables'>Adoptables <img src={pawPrint} className='pawPrint' alt='Paw Print' /></Link>
                    </div>
                    <div className='col-3' id='volunteer'>
                        <Link className='link' to='/volunteer'>Volunteer <img src={volunteerIcon} className='volunteerIcon' alt='Volunteer Icon' /></Link>
                    </div>
                </div>

                <div className="row" id='footer'>
                    <div className='col-2'>

                    </div>
                    <div className='col-8'>
                        <p>&copy; Copyright 2019. Family Addition Dog Rescue. All Rights Reserved.</p>
                    </div>
                    <div className='col-2' id='socialIcon'>
                        <a href='https://www.facebook.com/FamilyAdditionDogRescueofClt/' target='_blank' rel='noopener noreferrer'>
                            <img src={fbIcon} className='fbIcon' alt='Facebook Icon' />
                        </a>
                        <a href='https://www.instagram.com/familyadditiondogrescue/' target='_blank' rel='noopener noreferrer'>
                            <img src={instaIcon} className='instaIcon' alt='Instagram Icon' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

