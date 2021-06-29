import React from "react";

const Transaction = ({ text, amount }) => {
	return (
		<li className={amount < 0 ? "minus" : "plus"}>
			{text} <span>$ {amount}</span>
			<button className="delete-btn">X</button>
		</li>
	);
};

export default Transaction;
