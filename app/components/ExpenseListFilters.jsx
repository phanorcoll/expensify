import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters.jsx';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        const sortVal = e.target.value;
                        if (sortVal === 'date') {
                            this.props.dispatch(sortByDate(this.props.createdAt));
                        } else if (sortVal === 'amount') {
                            this.props.dispatch(sortByAmount(this.props.amount));
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);