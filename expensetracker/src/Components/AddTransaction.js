import React from 'react';
import './ExpenseTracker.css';

const AddTransaction = props => {
    return (
        <div className='addTransaction'>
            <h4 >Add New Transaction</h4>
            <hr />
            <div className='text'>
                <h4>Text</h4>
                <input className='inputtext' type="text" placeholder="Enter a task:" />
                <div className='amount'>
                    <h4>Amount</h4>
                    <h4>(negative - expense,positive - income)</h4>
                </div>
                <input className='inputtext' type="text" placeholder="Enter a task:" />
                <button className='button'>Add transaction</button>
            </div>
        </div>
    );
}

export default AddTransaction;