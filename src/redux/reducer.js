const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {id: 1, name: 'Learn Yoga', completed:false, priority: 'Medium'},
        {id: 2, name: 'Learn Reactjs', completed:true, priority: 'Hight'},
        {id: 3, name: 'Learn Javascript', completed:false, priority: 'Low'}
    ]
};
const rootReducer = (state = initState, action) => {
    switch (action.type){
        case 'todolist/todo': 
        return {
            ...state,
            todoList:[
                ...state.todoList,
                action.payload
            ]
        };
        default: return state;
    }
}

export default rootReducer;