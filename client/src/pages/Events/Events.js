import React, { Component } from 'react';
import './events.css';

// import Slideshow from '../../components/Slideshow/Slideshow';

// import dog1 from '../../images/fadrpuppies.jpg';
// import dog2 from '../../images/fluffypuppy.jpg';
// import dog3 from '../../images/landonfadrevents.jpg';
// import dog4 from '../../images/pitfall.jpg';

import FADRBannerDogBar from '../../images/FADRBannerDogBar.jpg'
import AdoptionEvent from '../../images/AdoptionEvent.jpg'
import FADRStPaddy from '../../images/FADRStPaddy.jpg'
import KaleighPaintYourPet from '../../images/KaleighPaintYourPet.jpg'
import ShepherdPuppies from '../../images/ShepherdMixPuppiesEvent.jpg'
import TanyaSavannah from '../../images/TanyaSavannah.jpg'



class EventPage extends Component {
    render() {
        return (
            <div className="FADREventPix">
                <div className='row'>
                    <div className='col-12'>
                        <img src={AdoptionEvent} alt="AdoptionEvent" className="FADREventPhoto" />
                        <img src={FADRStPaddy} alt="FADR St Paddy Event" className="FADREventPhoto" />
                        <img src={ShepherdPuppies} alt="Shepherd puppies" className="FADREventPhoto" />
                        <img src={KaleighPaintYourPet} alt="Kaleigh with Dog Portrait" className="FADREventPhoto" />
                        <img src={TanyaSavannah} alt="Tanya and Savannah" className="FADREventPhoto" />
                        <img src={FADRBannerDogBar} alt="FADR sign" className="FADREventPhoto" />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <iframe title='Google Calendar' src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=m6d8vu82v3bpp2r0r1i2a5k4mo%40group.calendar.google.com&amp;color=%235229A3&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=America%2FNew_York" frameBorder='0' scrolling='no' id='calendarGoogle'></iframe>
                    </div>
                </div>
            </div>
            /* <div className='col-4'>
                    <iframe title='Google Agenda' src="https://calendar.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=m6d8vu82v3bpp2r0r1i2a5k4mo%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=America%2FNew_York" frameBorder="0" scrolling="no" id='agendaGoogle'></iframe>
                </div> */

            // {/* <div className='row align-items-center' id='eventSlideshow'>
            //     <div className='col'>
            //         <Slideshow />
            //     </div>
            // </div> */}


        );
    }
}

export default EventPage;