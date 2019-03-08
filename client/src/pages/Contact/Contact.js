import React, { Component } from 'react';
import './contact.css';

class ContactPage extends Component {
    render() {
        return (
            <div className='contactInfo'>
                <div className='row'>
                    <div className='col'>
                        <h1 id='contactUs'>Contact Us</h1>
                    </div>
                </div>
                <div className='row' id='contactEmail'>
                    <div className='col'>
                        <h4 id='emailTitle'>Email <a href='mailto:familyadditiondogrescue@gmail.com'>familyadditiondogrescue@gmail.com</a></h4>
                        <h4 id='mailingTitle'>Mailing Address: </h4>
                        <p><strong>
                            PO Box 12221
                            Charlotte, NC 28220
                        </strong></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Instagram</h2>
                    </div>
                    <div className='col'>
                        <h2>Facebook</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="elfsight-app-8f1e4fcb-612b-4792-b815-02c0341e5178"></div>
                    </div>
                    <div className='col-6'>
                        <iframe title='Facebook Plugin' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFamilyAdditionDogRescueofClt%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>

                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;