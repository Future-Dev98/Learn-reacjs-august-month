export const addTodo = (data) => {
    return {type: 'todolist/todo', payload: data}
}

export const searchFilterChange = (text) => {
    return {type: 'search', payload: text}
}

export const statusFilterChange = (status) => {
    return {type: 'status', payload: status}
}
