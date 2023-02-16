import React from 'react';
import './ExpenseTracker.css';
import styled from 'styled-components';
import { useState } from 'react';

const Transactions = props => {
    const [isValid, setIsValid] = useState(true);

    console.log(props.Amount);
    // Number.parseFloat(props.Amount) > -1 ? setIsValid(false) : setIsValid(true);
    // if (Number.parseFloat(props.Amount) ) {
    //     setIsValid(false);
    //     console.log(isValid);
    //     return;
    // }

    return (
        <div className='transactions'>
            {
                props.Amount > -1 ? <div className='transactionBoxgreen'>
                    <div className='transactionContent'>
                        <div><h4>{props.Text}</h4></div>
                        {
                            <div><h4>₹{props.Amount}</h4></div>
                        }
                    </div>
                </div> : <div className='transactionBoxred'>
                    <div className='transactionContent'>
                        <div><h4>{props.Text}</h4></div>
                        {
                            <div><h4>₹{(props.Amount) * (-1)}</h4></div>
                        }
                    </div>
                </div>
            }


        </div>
    );
}

export default Transactions;