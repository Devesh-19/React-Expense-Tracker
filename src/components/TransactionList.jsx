import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	console.log(transactions);

	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction
						key={transaction.id}
						text={transaction.text}
						amount={transaction.amount}
					/>
				))}
				{/* <li className="minus">
					Cash <span>$-400</span>
					<button className="delete-btn">x</button>
				</li> */}
			</ul>
		</>
	);
};

export default TransactionList;
