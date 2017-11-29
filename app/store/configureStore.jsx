import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenserReducer from '../reducers/expenses.jsx';
import filtersReducer from '../reducers/filters.jsx';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({
            expenses: expenserReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}