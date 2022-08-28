import React from 'react';
import {NavLink, Link } from 'react-router-dom';
import './style.scss';

function Menu(props) {
    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li><NavLink to="count" >Count</NavLink></li>
                    <li><NavLink to="magic_box">Magic Box</NavLink></li>
                    <li><NavLink to="clock">Clock</NavLink></li>
                    <li><NavLink to="todo">Todo</NavLink></li>
                    <li><NavLink to="reducer">Reducer</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;