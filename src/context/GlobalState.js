import React, { createContext, useReducer } from "react";
import AppReducer, { ACTIONS } from "./AppReducer";

// Initial State
const initialState = {
	transactions: [
		{ id: 1, text: "Flower", amount: -20 },
		{ id: 2, text: "Salary", amount: 300 },
		{ id: 3, text: "Book", amount: -10 },
		{ id: 4, text: "Camera", amount: 150 },
	],
};

// Create Context
export const GlobalContext = createContext();

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	function deleteTransaction(id) {
		dispatch({
			type: ACTIONS.DELETE_TRANSACTION,
			payload: id,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
