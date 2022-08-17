import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function randomColor (currentColor) {
    const colorList = ['green', 'red', 'yellow', 'black', 'toronto', 'blue', 'grey'];
    const currentIndex = colorList.indexOf(currentColor);
    let newIndex = currentIndex;
    if (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * colorList.length);
    }
    console.log(colorList[newIndex])
    return colorList[newIndex];
}
function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    useEffect(() => {
        const colorInterval = setInterval(() => {
                const newColor = randomColor(colorRef.current);
                setColor(newColor);
                colorRef.current = newColor;
            }, 1000);
        return () => {
            clearInterval(colorInterval);
        }
    }, [])
    return color;
}

export default useMagicColor;