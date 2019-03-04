import React, { Component } from 'react';
import './contact.css';

class ContactPage extends Component {
    render() {
        return (
            <div className='contactInfo'>
                <div className='row'>
                    <div className='col'>
                        <h1>Contact Us!</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Facebook</h2>
                    </div>
                    <div className='col'>
                        <h2>Instagram</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <iframe title='Facebook Plugin' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFamilyAdditionDogRescueofClt%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
                    </div>
                    <div className='col-6'>
                        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                        <div className="elfsight-app-8f1e4fcb-612b-4792-b815-02c0341e5178"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;