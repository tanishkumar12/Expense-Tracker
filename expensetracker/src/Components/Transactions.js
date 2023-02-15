import React from 'react';
import './ExpenseTracker.css';

const Transactions = props => {
    return (
        <div className='transactions'>
            <div className='transactionsBox'>
                <div className='transactionContent'>
                    <div><h4>Name</h4></div>
                    <div><h4>+ 100</h4></div>
                </div>
            </div>
            <div className='transactionsBox'>
                <div className='transactionContent'>
                    <div><h4>Name</h4></div>
                    <div><h4>+ 100</h4></div>
                </div>
            </div>
            <div className='transactionsBox'>
                <div className='transactionContent'>
                    <div><h4>Name</h4></div>
                    <div><h4>+ 100</h4></div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;