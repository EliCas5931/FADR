import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './donate.css';
import amazonWish from '../../images/amazonwish.png';
import deliveryWish from '../../images/petco.jpg';

class DonatePage extends Component {
    render() {
        return (
            <div className='donatePage'>
                <div className='row'>
                    <div className='col'>
                        <h2>Family Addition Dog Rescue is a 501C3 group so donations are tax deductible.</h2>
                    </div>
                </div>
                <div className='row2'>
                    <div className='col'>
                        <div className="buttonDonate">
                            <a href='https://www.paypal.com/donate/?token=A7Qqnwdh25gPH-2-6RzPHzkyKwsSr2YyXvRzaTZmT9qb6G4UbXZvObMXoimfTlWFXoPcAm&country.x=US&locale.x=US' target='_blank' rel='noopener noreferrer'>
                                <button id='donateBtn'>Donations
				                    <div className="fill-one"></div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="wishListCard">
                            <img src={amazonWish} className="amazonWish" alt="Amazon Wishlist" />
                            <div className="card-body">
                                <h5 className="card-title">Amazon Wish List</h5>
                                <p className="card-text">Here is our Amazon Wish List that includes several crucial items we need for our rescue!</p>
                                <div className='buttonDonate'>
                                    <a href="https://www.amazon.com/hz/wishlist/ls/1Y10FHVSZRRH8?ref_=wl_share" className="amazonButton" target='_blank' rel='noopener noreferrer'>
                                        <button id='donateBtn'>Wishlist
                                            <div className='fill-one'></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'> */}
                    <div className='col-6'>
                        <div className="wishListCard">
                            <img src={deliveryWish} className="deliveryWish" alt="Delivery Code Wishlist" />
                            <div className="card-body">
                                <h5 className="card-title">Delivery Code Wish List</h5>
                                <p className="card-text">Here is our Delivery Code Wish List that includes other crucial items we need for our rescue from Petco!</p>
                                <div className='buttonDonate'>
                                    <a href='https://www.deliverycode.com/wishlist/33095' className="deliveryButton" target='_blank' rel='noopener noreferrer'>
                                        <button id='donateBtn'>Wishlist
                                            <div className='fill-one'></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </div>


        );
    }
}

export default DonatePage;