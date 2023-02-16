import React from 'react';
import './ExpenseTracker.css';

const Transactions = props => {
    return (
        <div className='transactions'>
            <div className='transactionsBox'>
                <div className='transactionContent'>
                    <div><h4>{props.Text}</h4></div>
                    <div><h4>{props.Amount}</h4></div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;