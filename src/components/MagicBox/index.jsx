import React from 'react';
import useMagicColor from '../../hook/useMagicColor';
import './MagicBox.scss';

MagicBox.propTypes = {
    
};

function MagicBox(props) {
    const color = useMagicColor();
    return (
        <div 
        className='magic-box' 
        style={{backgroundColor:color}}>MagicBox</div>
    );
}

export default MagicBox;