export const addTodo = (data) => {
    return {type: 'todolist/todo', payload: data}
}

export const todoToggleStatus = (id) => {
    return {type: 'toggle-status', payload: id}
}

export const searchFilterChange = (text) => {
    return {type: 'search', payload: text}
}

export const statusFilterChange = (status) => {
    return {type: 'status', payload: status}
}

export const prioritiesFilterChange = (priorities) => {
    return {type: 'priorities', payload: priorities}
}
