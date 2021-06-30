import React, { createContext, useReducer } from "react";
import AppReducer, { ACTIONS } from "./AppReducer";

// Initial State
const initialState = {
	transactions: [],
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

	function addTransaction(transaction) {
		dispatch({
			type: ACTIONS.ADD_TRANSACTION,
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
