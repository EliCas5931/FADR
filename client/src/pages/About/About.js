import React, { Component } from 'react';
import './about.css';

import aboutLogo from '../../images/aboutImage.png';

class AboutPage extends Component {
    render() {
        return (
            <div className='About'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={aboutLogo} className='aboutImage' alt='About Logo' id='aboutLogo' />
                    </div>
                    <div className='col-9' id='aboutText'>
                        <h1 id='aboutTitle'><strong>About Us!</strong></h1>
                        <br></br>
                        <h4>Our Mission</h4>
                        <p>
                            We are dedicated to providing refuge to the many abandoned, abused and neglected dogs of our community and placing them in appropriate homes where they are members of the family.
                        </p>

                        <p>
                            Family Addition Dog Rescue of Charlotte is a group of like minded individuals who dedicate their homes and their hearts to providing refuge to the many abandoned, abused and neglected dogs of our community. FADR typically rescues from small rural kill shelters and often houses 30-45 dogs at any given time. Each dog is fully vetted, micro chipped, altered, fed high quality nutrition and started on monthly flea and heartworm preventative. FADR has placed/re-homed over 400 dogs and a few cats.
                        </p>

                    </div>
                    <div className='row' id='under'>
                        <div className='col'>
                            <p id="aboutText">
                                Public awareness of our overpopulation problem is another focus of Family Addition. At all of our adoption events we ensure each citizen is educated on the plight of homeless animals in our area and the proper care of any companion animal.
                            </p>
                            <br></br><br></br><br></br><br></br>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;