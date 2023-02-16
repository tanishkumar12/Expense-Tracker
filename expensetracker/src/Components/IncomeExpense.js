import React from 'react';
import './ExpenseTracker.css';
import { useState } from 'react';

const IncomeExpense = props => {
    const [isValid, setIsValid] = useState(true);

    return (
        <div className='incomeExpense'>
            <div className='ieBox'>
                <h4>INCOME</h4>
                <h3 style={{ color: 'green' }}>₹{props.calcIncome}</h3>
            </div>
            <div className='vline'></div>
            <div className='ieBox'>
                <h4>EXPENSE</h4>
                <h3 style={{ color: 'red' }}>₹{(props.calcExpense) * (-1)}</h3>
            </div>
        </div>
    );
}

export default IncomeExpense;