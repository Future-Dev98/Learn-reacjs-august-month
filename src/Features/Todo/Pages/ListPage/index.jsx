import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TodoForm from '../../TodoForm';
import TodoItem from '../../TodoItem';

function ListPage(props) {
    const [todoList, setTodoList] = useState([
        {
            id:1,
            title: 'test1',
            status: 'completed'
        },
        {
            id:2,
            title: 'test2',
            status: 'new'
        },
        {
            id:3,
            title: 'test3',
            status: 'new'
        }
    ]);
    const location = useLocation();
    const [statusList, setStatusList] = useState(todoList);
    const [filteredStats, setFilteredStatus] = useState(() => {
        const params = querySt
        return 'all';
    })
    const handleChangeStatus = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'completed' ? 'new' : 'completed'
        };
        setTodoList(newTodoList);
        setStatusList(newTodoList);
      
    }

    const handleRemoveItem = (todo, idx) => {
        const newTodoList = [...statusList];
        newTodoList.splice(idx, 1);
        setStatusList(newTodoList);
    }

    const handleShowALL = () => {
        const newTodoList = [...todoList];
        setStatusList(newTodoList);
        
    }

    const handleShowCompleted = () => {
        const newTodoList = todoList.filter( todo =>  todo.status === 'completed');
        setStatusList(newTodoList);
    }

    const handleShowNew = () => {
        const newTodoList = todoList.filter( todo =>  todo.status === 'new');
        setStatusList(newTodoList);
    }

    //submit form
    const handleOnSubmit = (formValues) => {
        const newTodoList = [...todoList];
        newTodoList.push({
            id:4,
            ...formValues
        })

        setTodoList(newTodoList)
        setStatusList(newTodoList);
    }

    return (
        <div>
            <TodoForm onSubmit={handleOnSubmit}/>
            <TodoItem todoList={statusList} onTodoClick={handleRemoveItem} />
            <button onClick={handleShowALL}>Show All</button>
            <button onClick={handleShowCompleted}>Show Completed</button>
            <button onClick={handleShowNew}>Show New</button>
        </div>
    );
}

export default ListPage;