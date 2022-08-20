import React from 'react';
import {Link } from 'react-router-dom';
import './style.scss';

function Menu(props) {
    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li><Link to="count">Count</Link></li>
                    <li><Link to="magic_box">Magic Box</Link></li>
                    <li><Link to="clock">Clock</Link></li>
                    <li><Link to="todo">Todo</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;