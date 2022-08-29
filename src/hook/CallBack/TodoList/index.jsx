import React, {memo} from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    TodoList: PropTypes.array.isRequired,
    addtodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
    TodoList: [],
    addtodo: null
}

function TodoList(props) {
    const {TodoList, addtodo} = props;
    console.log("child render");
    
    return (
        <>
            <ul>
                {TodoList.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
            <button onClick={addtodo}>Add New</button>
        </>
        
    );
}

export default memo(TodoList);