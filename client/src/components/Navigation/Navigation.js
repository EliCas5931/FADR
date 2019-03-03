import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

// what i'm adding so if it's wrong I can delete it 
import fadr from './fadr.PNG';
import './navigation.css';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          {/* <Link className='navbar-brand' to='#'>Family Addition Dog Rescue</Link> */}

          <a className="navbar-brand" href="https://system.netsuite.com/core/media/media.nl?id=3738002&c=589178&h=cd9e47a89ed774871723" target="_blank" rel="noopener noreferrer"> <img src={fadr} className='FADRlogo' alt='Family Addition Logo' height="150" width="275" /></a>

          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>

            <ul className='navbar-nav mr-auto'>
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>}

            </ul>

            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home |</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/about' onClick={this.toggleCollapse}>About Us |</Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link' to='/events' onClick={this.toggleCollapse}>Events |</Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link' to='/contact' onClick={this.toggleCollapse}>Contact |</Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link' to='/application' onClick={this.toggleCollapse}>Application</Link>
                  </li>

                  {/* <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link>
                  </li>

                  <li className='nav-item'><Link className='nav-link' to='/register' onClick={this.toggleCollapse}>Register</Link>
                  </li> */}

                </>}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
