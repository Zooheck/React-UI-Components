import React from 'react';
import './Header.css';
import './ImageThumbnail';
import './HeaderTitle';
import './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return(
        <div className='header-container'>
            <ImageThumbnail />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;