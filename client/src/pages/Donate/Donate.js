import React, { Component } from 'react';
import './donate.css';

class DonatePage extends Component {
    render() {
        return (
            <div className='donatePage'>
                <div className='row'>
                    <div className='col'>
                        <h2>Family Addition Dog Rescue is a 501C3 group so donations are tax deductible.</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="container container-one">
                            <button id='donateBtn'>Hover over me
				            <div class="fill-one"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


                );
            }
        }
        
export default DonatePage;