import React from "react";
import "./ExpenseTracker.css";
import ExpenseBalance from "./ExpenseBalance";
import IncomeExpense from "./IncomeExpense";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";
import Heading from "../UI/Heading";
import History from "../UI/History";
import { useState } from "react";
import Delete from "./Delete";

const ExpenseTracker = () => {
    const [transaction, setTransaction] = useState([]);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [balance, setBalance] = useState(0);


    const saveTransactionData = (newTransactionData) => {
        if (!newTransactionData) {
            alert("Please add data");
        } else {
            const transactionData = {
                id: new Date().getTime().toString(),
                ...newTransactionData,
            };
            if (Number.parseFloat(transactionData.amount) > -1) {
                setIncome(income + Number.parseFloat(transactionData.amount));
                setBalance(balance + Number.parseFloat(transactionData.amount));
            }
            else {
                setExpense(expense + Number.parseFloat(transactionData.amount));
                setBalance(balance + Number.parseFloat(transactionData.amount));
                console.log('addedexpense' + expense);
            }
            setTransaction((transactions) => {
                return [...transactions, transactionData];
            });
        }
    };
    const deleteAllTransactions = (deleteTransactionData) => {
        if (!deleteAllTransactions) {
            alert('No Transactions found');
        }
        else if (deleteTransactionData === true) {
            setTransaction([]);
            setIncome(0);
            setExpense(0);
            setBalance(0);

        }
    };
    console.log(income);
    console.log(expense);
    console.log(balance);
    console.log(transaction);
    return (
        <div className="expenseTracker">
            <Heading />
            <ExpenseBalance calcBalance={balance} />
            <IncomeExpense calcIncome={income} calcExpense={expense} />
            <History />
            <div className="historyScrollable">
                {transaction.length === 0 && <p>No Transactions </p>}
                {transaction.length > 0 &&
                    transaction.map((transaction, Index) => (
                        <Transactions Text={transaction.text} Amount={transaction.amount} key={Index} />
                    ))}
            </div>
            <AddTransaction saveTransaction={saveTransactionData} />
            <Delete deleteTransactions={deleteAllTransactions} />
        </div>
    );
};

export default ExpenseTracker;
