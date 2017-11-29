import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';
import { startAddExpense } from '../actions/expenses.jsx';

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/')
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);