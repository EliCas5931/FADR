import React, { Component } from 'react';
import './footer.css';
import AuthContext from '../../contexts/AuthContext';

class Footer extends Component {
    static contextType = AuthContext;

    render() {
        // const { user } = this.context;
        // Not sure if targetClass is needed? or what it is
        
        return (
            <div className="footer">
                <p>&copy; Copyright 2019. Family Addition Dog Rescue. All Rights Reserved.</p>
                <div className="social">
                    
                </div>
            </div>
        );
    }
}

export default Footer;

