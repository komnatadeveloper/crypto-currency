const initialState = {
  chain: null
}


export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHAIN_CREATED':
      return {
        ...state,
        chain: payload
      };    

    default:
      return state;
  }
}