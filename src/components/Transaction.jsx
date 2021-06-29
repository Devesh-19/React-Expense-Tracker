import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ id, text, amount }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = amount < 0 ? "-" : "+";

	return (
		<li className={sign === "-" ? "minus" : "plus"}>
			{text}
			<span>
				{sign}${Math.abs(amount)}
			</span>
			<button
				className="delete-btn"
				onClick={() => deleteTransaction(id)}>
				X
			</button>
		</li>
	);
};

export default Transaction;
