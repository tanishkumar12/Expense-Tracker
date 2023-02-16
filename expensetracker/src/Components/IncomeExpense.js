import React from 'react';
import './ExpenseTracker.css';

const IncomeExpense = props => {
    return (
        <div className='incomeExpense'>
            <div className='ieBox'>
                <h4>INCOME</h4>
                <h3>$100.00</h3>
            </div>
            <div className='vline'></div>
            <div className='ieBox'>
                <h4>EXPENSE</h4>
                <h3>$100.00</h3>
            </div>
        </div>
    );
}

export default IncomeExpense;