import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
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
    const history = useHistory();
    const match = useRouteMatch();
    const [statusList, setStatusList] = useState(todoList);
    const [filteredStats, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        const newTodoList = params.status ? todoList.filter(todo => todo.status === params.status) : todoList;
        setStatusList(newTodoList);
    });
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
        const queryParams = {status: 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowCompleted = () => {
        const newTodoList = todoList.filter( todo =>  todo.status === 'completed');
        setStatusList(newTodoList);
        const queryParams = {status: 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    }

    const handleShowNew = () => {
        const newTodoList = todoList.filter( todo =>  todo.status === 'new');
        setStatusList(newTodoList);
        const queryParams = {status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
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