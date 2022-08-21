import React from 'react';
import CallApi from '../../CallApi';
import Router from '../../Router';
import './style.scss';

function Main() {
    return (
        <main>
            <Router />
            <CallApi />
        </main>
    );
}

export default Main;