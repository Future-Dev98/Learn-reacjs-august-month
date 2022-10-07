import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
            {
                id: 1,
                name: 'Learn Yoga',
                completed: false,
                priority: 'Medium'
            }, {
                id: 2,
                name: 'Learn Reactjs',
                completed: true,
                priority: 'Hight'
            }, {
                id: 3,
                name: 'Learn Javascript',
                completed: false,
                priority: 'Low'
            }
        ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo =>  action.payload === todo.id);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        }
    }
});