import {createSelector} from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusSelector,
    (todoList, searchText, status) => {
        return todoList.filter(todo => {
            if (status === 'All') {
                return todo.name.includes(searchText);
            }

            return todo.name.includes(searchText) && status === 'Completed'
                    ? todo.completed : !todo.completed;
        })
    }
)