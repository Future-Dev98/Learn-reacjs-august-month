import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnHancers = composeWithDevTools();
const store = createStore(rootReducer, composedEnHancers);

export default store;