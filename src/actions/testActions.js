import { 
  LOOM_CHAIN_CREATED, 
  ETH_CHAIN_CREATED 
} from "./types";
import LoomChain from '../utils/loom/chains/LoomChain'
import EtheriumChain from '../utils/loom/chains/EthereumChain'



export const createLoomChain = (  privateKey, test = true ) => async dispatch => {


    const loomChain = await new LoomChain(privateKey, true);
  console.log(loomChain);

    dispatch({
      type: LOOM_CHAIN_CREATED,
      payload: loomChain
    }); 
}

export const createEthChain = (  privateKey, test = true ) => async dispatch => {


    const ethChain = await new EtheriumChain(privateKey, true);
  console.log(ethChain);

    dispatch({
      type: ETH_CHAIN_CREATED,
      payload: ethChain
    }); 
}