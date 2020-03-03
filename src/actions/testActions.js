import { CHAIN_CREATED } from "./types";
import LoomChain from '../utils/loom/chains/LoomChain'


// Login User
export const createChain = (  privateKey, test = true ) => async dispatch => {


    const chain = await new LoomChain(privateKey, true);
    console.log(chain);

    dispatch({
      type: CHAIN_CREATED,
      payload: chain
    });   

  // try {
  //   const chain = await new LoomChain( privateKey, true)
  //   console.log(chain)

  //   dispatch({
  //     type: CHAIN_CREATED,
  //     payload: chain
  //   });   
  // }

  // catch{
  //   dispatch({
  //     type: CHAIN_CREATED,
  //     payload: 'ERROR IN CHAIN'
  //   }); 
  // }
}