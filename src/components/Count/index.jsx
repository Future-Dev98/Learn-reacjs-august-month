import React from 'react';
import {useState, useRef, useEffect} from 'react';

function Count(props) {
    const [count, setCount] = useState(0);
    const Previous = useRef(count);

    useEffect(() => {
        Previous.current = count;
    }, [count]);

    const handleClickIncrease = () => {
        setCount(x => x + 1);
    }

    return (
        <div>
            <p>Previous: {Previous.current}</p>
            <p>Current: {count}</p>
            <div>
                <button onClick={handleClickIncrease}>Increase</button>
            </div>

        </div>
    );
}

export default Count;