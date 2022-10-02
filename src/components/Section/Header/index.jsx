import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../logo.svg';
import Menu from './Menu';
import './style.scss';

function Header(props) {
    return (
        <header className="App-header">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo"/>
            </Link>

            <Menu/>
        </header>
    );
}

export default Header;