import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './CounterSlice';

function CounterFeature(props) {
    const counter = useSelector(state => state.counter);
    const disPatch = useDispatch();

    const handleIncrease = () => {
        const action = increase(); //action creator
        disPatch(action)
    }

    const handleDecrease = () => {
        const action = decrease(); //action creator
        disPatch(action)
    }
    return (
        <div>
            Counter: {counter}
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default CounterFeature;