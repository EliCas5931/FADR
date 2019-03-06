import React from 'react';
// import CardBtn from '../CardBtn/CardBtn';
import './card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='row'>
                {props.children}
            </div>
        </div>
    );
}

export default Card;