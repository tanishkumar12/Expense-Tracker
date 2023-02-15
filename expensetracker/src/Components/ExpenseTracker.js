import React from 'react';
import './ExpenseTracker.css';
import ExpenseBalance from './ExpenseBalance';
import IncomeExpense from './IncomeExpense';
import Transactions from './Transactions';
import AddTransaction from './AddTransaction';
import Heading from '../UI/Heading';
import History from '../UI/History';


const ExpenseTracker = () => {
    return (
        <div className='expenseTracker'>
            <Heading />
            <ExpenseBalance />
            <IncomeExpense />
            <History />
            <Transactions />
            <AddTransaction />

        </div >
    );
}

export default ExpenseTracker;