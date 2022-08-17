import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoItem.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoItem.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoItem(props) {

    const {todoList, onTodoClick} = props;

    const handleClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }

    return (
        <ul className='todo-list'>
           {todoList.map( (todo, idx) => (
                <li 
                key={todo.id}
                className={classNames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })}
                onClick={() => handleClick(todo, idx)}
                >
                {todo.title}
                </li>
           ))} 
        </ul>
    );
}

export default TodoItem;