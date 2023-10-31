import React from 'react';
import Title from '../../shared/header/Title';
import Nav from '../../shared/header/Navigation';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <Title />
                <Nav />
            </div>
        </header>
    );
}

export default Header;
