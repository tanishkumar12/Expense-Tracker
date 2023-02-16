import React from 'react';
import './ExpenseTracker.css';
import { useState } from 'react';

const AddTransaction = props => {
    const [enteredText, setEnteredText] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const TextInput = (event) => {
        setEnteredText(event.target.value);
        console.log('title changed');
    };
    const AmountInput = (event) => {
        console.log('title changed');
        setEnteredAmount(event.target.value);
    };

    const AddTranst = (event) => {
        event.preventDefault();

        const inputTransaction = {
            text: enteredText,
            amount: enteredAmount,
        };
        if (inputTransaction.text.trim().length === 0 || inputTransaction.amount.trim().length === 0) {
            alert("Please add data");
            return;
        }
        // if (typeinputTransaction.amount.trim())
        //     console.log(inputTransaction);

        props.saveTransaction(inputTransaction);
        setEnteredText('');
        setEnteredAmount('');

    };
    return (
        <div className='addTransaction'>
            <h4 >Add New Transaction</h4>
            <hr />
            <div className='text'>
                <h4>Text</h4>
                <form className='formTransaction' onSubmit={AddTranst}>
                    <input className='inputtext' onInput={TextInput} value={enteredText} type="text" placeholder="Enter text:" />
                    <div className='amount'>
                        <h4>Amount</h4>
                        <h4>(negative - expense,positive - income)</h4>
                    </div>
                    <input className='inputtext' onInput={AmountInput} value={enteredAmount} type="number" placeholder="Enter amount:" />
                    <button className='button'>Add transaction</button>
                </form>
            </div>
        </div >
    );
}

export default AddTransaction;