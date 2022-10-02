import counterReducer from '../Features/Counter/CounterSlice';
const {configureStore} = require('@reduxjs/toolkit')

const rootReducer = {
    counter: counterReducer
}
const store = configureStore({reducer: rootReducer});

export default store;