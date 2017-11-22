import { createStore, combineReducers } from 'redux';
import expenserReducer from '../reducers/expenses.jsx';
import filtersReducer from '../reducers/filters.jsx';

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({
            expenses: expenserReducer,
            filters: filtersReducer
        })
    );

    return store;
}