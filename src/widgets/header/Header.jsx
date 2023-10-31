import React from 'react';
import HeaderNavigation from '../../shared/header/HeaderNavigation';
import HeaderTitle from '../../shared/header/HeaderTitle';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <HeaderTitle name={'Chicory studio'}/>
                <HeaderNavigation />
            </div>
        </header>
    );
}

export default Header;
