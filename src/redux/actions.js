export const addTodo = (data) =>{
    return {
        type:'todolist/todo',
        payload: data
    }
}