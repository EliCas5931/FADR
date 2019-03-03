import React, { Component } from 'react';
import './events.css';

import dog1 from '../../images/fadrpuppies.jpg';
import dog2 from '../../images/fluffypuppy.jpg';
import dog3 from '../../images/landonfadrevents.jpg';
import dog4 from '../../images/pitfall.jpg';

class EventPage extends Component {
    render() {
        return (
            <div className='eventsCalendar'>
                <div className='row'>
                    <div className='col-8'>
                        <iframe title='Google Calendar' src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=m6d8vu82v3bpp2r0r1i2a5k4mo%40group.calendar.google.com&amp;color=%235229A3&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=America%2FNew_York" frameBorder='0' scrolling='no' id='calendarGoogle'></iframe>
                    </div>
                    <div className='col-4'>
                        <iframe title='Google Agenda' src="https://calendar.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=m6d8vu82v3bpp2r0r1i2a5k4mo%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=America%2FNew_York" frameborder="0" scrolling="no" id='agendaGoogle'></iframe>
                    </div>
                </div>
                <h1>Our Past Events!</h1>
                <div className='row'>
                    <div className='col-6'>
                        <div id="carousel1" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-interval="5000">
                                    <img src={dog1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-interval="5000">
                                    <img src={dog2} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div id="carousel2" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-interval="5000">
                                    <img src={dog3} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-interval="5000">
                                    <img src={dog4} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventPage;