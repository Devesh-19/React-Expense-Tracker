export const ACTIONS = {
	DELETE_TRANSACTION: "delete-transaction",
	ADD_TRANSACTION: "add-transaction",
};

export default (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TRANSACTION:
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};

		case ACTIONS.DELETE_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};

		default:
			return state;
	}
};
