export const addTodo = (data) =>{
    return {
        type:'todolist/todo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'search',
        payload: text
    }
}