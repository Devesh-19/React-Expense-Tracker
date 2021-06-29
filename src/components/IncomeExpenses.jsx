import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => acc + item)
		.toFixed(2);

	// const income = amounts
	// 	.reduce((acc, item) => {
	// 		if (acc < 0) acc = 0;
	// 		if (item >= 0) return acc + item;
	// 		return acc;
	// 	})
	// 	.toFixed(2);

	const expense = amounts
		.filter((item) => item < 0)
		.reduce((acc, item) => acc + item)
		.toFixed(2);

	// const expense = amounts
	// 	.reduce((acc, item) => {
	// 		if (item <= 0) return acc + item;
	// 		return acc;
	// 	})
	// 	.toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">+${income}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">-${Math.abs(expense)}</p>
			</div>
		</div>
	);
};

export default IncomeExpense;
