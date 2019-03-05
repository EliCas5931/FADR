import React from 'react';
import Cardbtn from '../CardBtn/CardBtn';
import './card.css';

function Card(props) {
    return(
        <div className='card'>
        {props.children}
        </div>
    );
}

export default Card;