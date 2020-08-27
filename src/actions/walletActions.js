import Portis from "@portis/web3";
import { ethers } from "ethers";

// import networkConf from "../config/networks.json";
// import walletConf from "../config/wallets.json";

import  networkConf from '../utils/config/networks.json'
import  walletConf from '../utils/config/wallets.json'

import axios from 'axios';
import { 
	CONNECTED_TO_WALLET 
} from './types';


export const connectToWallet = (   ) => async dispatch => {
	try {
		const portis = new Portis(
			walletConf.portisTest.dappId,
			networkConf.defaultNetwork.name
		);
		const web3Provider = new ethers.providers.Web3Provider(portis.provider);

		console.log('walletActions -> connectToWallet -> web3Provider ->',web3Provider );
		dispatch({
			type: CONNECTED_TO_WALLET,
			payload: web3Provider
		})

	} catch (err) {
		console.log('walletActions -> connectToWallet -> errors ->', err);
	}
}
