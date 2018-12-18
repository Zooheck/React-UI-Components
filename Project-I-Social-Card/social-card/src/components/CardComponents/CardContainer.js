import React from 'react';
import './Card.css';
import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <a className='card-container'>
            <CardBanner />
            <CardContent />
        </a>
    );
}

export default CardContainer;