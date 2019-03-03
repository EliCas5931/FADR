import React, { Component } from 'react';
import './footer.css';
import AuthContext from '../../contexts/AuthContext';

import fbIcon from './fb.png';
import instaIcon from './insta.png';

class Footer extends Component {
    static contextType = AuthContext;

    render() {
        // const { user } = this.context;
        // Not sure if targetClass is needed? or what it is

        return (
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
        );
    }
}

export default Footer;

