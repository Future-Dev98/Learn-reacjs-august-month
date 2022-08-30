import React from 'react';
import useData from './Data';

function CustomHook(props) {
    const data = useData("https://jsonplaceholder.typicode.com/todos");   
    return (
        <ul>
            {data && data.map((item, index) => {
                return <li key={index}>{item.title}</li>
            })}
        </ul>
    );
}

export default CustomHook;