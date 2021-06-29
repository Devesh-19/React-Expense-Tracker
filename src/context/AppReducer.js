export const ACTIONS = {
	DELETE_TRANSACTION: "delete-transaction",
};

export default (state, action) => {
	switch (action.type) {
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
