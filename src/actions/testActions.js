import { 
  KEYS_CREATED,
  LOOM_CHAIN_CREATED, 
  ETH_CHAIN_CREATED 

} from "./types";
import LoomChain from '../utils/loom/chains/LoomChain'
import EtheriumChain from '../utils/loom/chains/EthereumChain'
import {makeWallet} from '../utils/generate-key/wallet-from-password'
import { createLoomPrivateKeyFromEthKey, createLoomPrivateKey } from "../utils/loom/utils/crypto-utils";






const makeLoomWallet = async   ( ethKey )  => {
  const loomInfo = await  createLoomPrivateKeyFromEthKey( ethKey )
  return loomInfo;
}

const makeEtheriumWallet = async ({ email, password }) => {
  const ethInfo = await  makeWallet({
    hardness: 1000,
    email,
    password
  });  
  return ethInfo
}

export const createLoomAndEthKeys = async ({ email, password }) =>  {
  const ethInfo = await makeEtheriumWallet({ email, password })

  // const loomInfo = await makeLoomWallet(ethInfo.privateKey)

  const loomInfo = createLoomPrivateKey()
  return {
    ethInfo,
    loomInfo
  };
}

export const handleRegisterByEmailPassword = ({ email, password }) => async dispatch => {

  const keyInfos = await createLoomAndEthKeys({ email, password });
  dispatch({
    type: KEYS_CREATED,
    payload: keyInfos
  });
  console.log(keyInfos);

  const loomChain = await createLoomChain(
    keyInfos.loomInfo,
    true // Test
  );
  dispatch({
    type: LOOM_CHAIN_CREATED,
    payload: loomChain
  });

  const ethChain = await createEthChain(
    keyInfos.ethInfo.privateKey,
    true // Test
  );
  dispatch({
    type: ETH_CHAIN_CREATED,
    payload: ethChain
  }); 

  console.log({
    loomChain,
    ethChain
  });




}




export const createLoomChain = async (  privateKey, test = true ) =>  {
  const loomChain = await new LoomChain(privateKey, true);
  return loomChain;
}

export const createEthChain = async (  privateKey, test = true ) =>  {
  const ethChain = await new EtheriumChain(privateKey, true);
  return ethChain;
}