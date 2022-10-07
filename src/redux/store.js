import filtersSlice from '../components/Redux/Filters/FiltersSlice';
import todoSlice from '../components/Redux/TodoList/TodosSlice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer
    }
});

export default store;