import React from 'react';
import './Card.css';
import './CardBanner';
import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className='card-container' href='https://www.reactjs.org'>
            <CardBanner />
            <CardContent />
        </div>
    );
}

export default CardContainer;