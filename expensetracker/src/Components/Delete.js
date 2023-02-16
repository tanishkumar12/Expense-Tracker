import React from "react";
import './ExpenseTracker.css'
import { useState } from "react";

const Delete = props => {
    const [remove, setRemove] = useState(false);
    const deletetransactions = (event) => {
        event.preventDefault();

        setRemove(true);
        props.deleteTransactions(remove);

    };
    return (
        <form className='formTransaction' onSubmit={deletetransactions}>
            <button className='button'>Delete all transaction</button>
        </form>
    );
};

export default Delete;