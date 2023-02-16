import React from 'react';
import './ExpenseTracker.css';

const ExpenseBalance = props => {
    return (
        <div className='expenseBalance'>
            <h4>YOUR BALANCE</h4>
            <h1 className='balance'>₹{props.calcBalance}</h1>
        </div>
    );
}

export default ExpenseBalance;