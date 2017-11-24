import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.jsx';
import selectExpenses from '../selectors/expenses.jsx'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
        }
        <h1>Expense List</h1>
    </div>
);

const mapstateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapstateToProps)(ExpenseList);