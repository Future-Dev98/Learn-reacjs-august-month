import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                    <li><NavLink to="redux">Redux</NavLink></li>
                    <li><NavLink to="callback">CallBack</NavLink></li>
                    <li><NavLink to="memo">Memo</NavLink></li>
                    <li><NavLink to="custom-hook">CustomHook</NavLink></li>
                    <li><NavLink to="css_module">CssModule</NavLink></li>
                    <li><NavLink to="style_component">Style Components</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;