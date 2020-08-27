import { 
	CONNECTED_TO_WALLET
} from "../actions/types";

const initialState = {
  walletAccount: null,
}

export default function ( state = initialState, action ) {
	const {type, payload } = action;

	switch ( type ) {
		case CONNECTED_TO_WALLET:
			return {
				...state,
				walletAccount: payload

			}
		default:
			return state;
	}
}