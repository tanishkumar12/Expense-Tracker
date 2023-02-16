import React from "react";
import "./ExpenseTracker.css";
import ExpenseBalance from "./ExpenseBalance";
import IncomeExpense from "./IncomeExpense";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";
import Heading from "../UI/Heading";
import History from "../UI/History";
import { useState } from "react";

const ExpenseTracker = () => {
    const [transaction, setTransaction] = useState([]);

    const saveTransactionData = (newTransactionData) => {
        if (!newTransactionData) {
            alert("Please add data");
        } else {
            const transactionData = {
                id: new Date().getTime().toString(),
                ...newTransactionData,
            };
            setTransaction((transactions) => {
                return [...transactions, transactionData];
            });
        }
    };
    console.log(transaction);
    return (
        <div className="expenseTracker">
            <Heading />
            <ExpenseBalance />
            <IncomeExpense />
            <History />
            {transaction.length === 0 && <p>No Transactions </p>}
            {transaction.length > 0 &&
                transaction.map((transaction, transactionIdx) => (
                    <Transactions Text={transaction.text} Amount={transaction.amount} />
                ))}
            <AddTransaction saveTransaction={saveTransactionData} />
        </div>
    );
};

export default ExpenseTracker;
