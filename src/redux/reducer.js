import filter from '../components/Redux/Filters/FiltersSlice';
import todolist from '../components/Redux/TodoList/TodosSlice'

const rootReducer = (state = {}, action) => {
    return {
        filters: filter(state.filters, action),
        todoList: todolist(state.todoList, action)
    }
}

export default rootReducer;