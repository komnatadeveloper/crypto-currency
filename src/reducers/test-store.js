import { LOOM_CHAIN_CREATED, ETH_CHAIN_CREATED } from "../actions/types";



const initialState = {
  loomChain: null,
  ethChain: null
}


export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOOM_CHAIN_CREATED:
      return {
        ...state,
        loomChain: payload
      };    
    case ETH_CHAIN_CREATED:
      return {
        ...state,
        ethChain: payload
      };    

    default:
      return state;
  }
}