import React from 'react';
import logo from '../../../logo.svg';
import Menu from './Menu';
import './style.scss';

function Header(props) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Menu />
        </header>
    );
}

export default Header;