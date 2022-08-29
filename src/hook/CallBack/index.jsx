import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';

function CallBack(props) {
    const [Todolist, setTodolist] = useState([]);
    const [count, setCount] = useState(0);

    const addtodo = useCallback(() => {
        setTodolist(t => [...t, 'New Todo']);
    }, [Todolist])

    function increase () 
    {
        setCount((x) => x + 1);
    }
    return (
        <div>
            <TodoList addtodo={addtodo} TodoList={Todolist}/>
            <p>Count: {count}</p>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default CallBack;