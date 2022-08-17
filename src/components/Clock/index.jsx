import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function formatDate (date) {

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds}`;
}

function Clock(props) {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        
        const clockInterVal = setInterval(() => {
            const date = new Date();
            setTimeString(formatDate(date));
        }, 1000)
        return () => {
            clearInterval(clockInterVal)
        }
    }, [])
    return (
        <div>
            {timeString}
        </div>
    );
}

export default Clock;