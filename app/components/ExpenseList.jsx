import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.jsx';
import selectExpenses from '../selectors/expenses.jsx'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapstateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapstateToProps)(ExpenseList);