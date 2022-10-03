const initState = [
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
];
const TodosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todolist/todo':
            return [
                ...state,
                action.payload
            ];
        case 'toggle-status':
            return state.map(
                todo => todo.id === action.payload
                    ? {
                        ...todo,
                        completed: !todo.completed
                    }
                    : todo
            );
        default:
            return state;
    }
}

export default TodosReducer;