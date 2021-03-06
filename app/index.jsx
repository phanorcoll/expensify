import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.jsx';
import configureStore from './store/configureStore.jsx';
import { addExpense } from './actions/expenses.jsx';
import { setTextFilter } from './actions/filters.jsx';
import getVisibleExpenses from './selectors/expenses.jsx';
import 'normalize.css/normalize.css';
import './scss/main.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'water bill',
    amount: 4500,
}));

store.dispatch(addExpense({
    description: 'gas bill',
    amount: 300,
    createdAt:1000
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 109500,
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));