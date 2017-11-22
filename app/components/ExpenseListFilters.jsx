import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters.jsx';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }} />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                const sortVal = e.target.value;
                if (sortVal === 'date') {
                    props.dispatch(sortByDate(props.createdAt));
                } else if (sortVal === 'amount') {
                    props.dispatch(sortByAmount(props.amount));
                }
            }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);