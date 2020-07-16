import Portis from "@portis/web3";
import { ethers } from "ethers";

import networkConf from "../config/networks.json";
import walletConf from "../config/wallets.json";
import deployedNetwork from "../contracts/networks/Resardis.json";
import abi from "../contracts/abis/Resardis.json";

const portis = new Portis(
  walletConf.portisTest.dappId,
  networkConf.defaultNetwork.name
);
const web3Provider = new ethers.providers.Web3Provider(portis.provider);

// TEST VARİABLES START
const payAmt = "0.0023";
const payToken = ethers.constants.AddressZero;
const buyAmt = "12.8";
const buyToken = "0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e";
// TEST VARIABLES END

function selectNetwork(networkJson, chainId = 0) {
  chainId = parseInt(chainId, 10);
  // Set default net
  let network = networkJson.defaultNetwork;

  let i;
  for (i = 0; i < networkJson.networks; i++) {
    if (networkJson.networks[i].chainId === chainId) {
      network = networkJson.networks[i];
    }
  }

  return network;
}

function normalizeAddress(address) {
  // All addresses should be normalized before using in functions
  // and before presenting to the user
  address = ethers.utils.getAddress(address);

  return address;
}

function normalizeAmount(amount) {
  // takes amount in ether
  // make sure that you convert the value to Big number wei
  // before using in smart contract functions
  amount = ethers.utils.parseEther(amount);

  return amount;
}

function weiToEther(amount) {
  // All coin amounts should be presented to users in ether format
  amount = ethers.utils.formatEther(amount);

  return amount;
}

function getSmartContractAddress(jsonObj, chainId) {
  let contractAddress = jsonObj[chainId]["address"];
  // Normalize the address to checksummed address
  contractAddress = normalizeAddress(contractAddress);

  console.log("Contract address: ", contractAddress);

  return contractAddress;
}

function getSmartContractAbi(jsonObj) {
  return jsonObj;
}

async function getUserAccountList(provider) {
  const accounts = await provider.listAccounts();

  // Normalize the address to checksummed address
  let i;
  for (i = 0; i < accounts.length; i++) {
    accounts[i] = normalizeAddress(accounts[i]);
  }

  console.log("User account list: ", accounts);

  return accounts;
}

async function getUserAccount(provider, index = 0) {
  const accountList = await getUserAccountList(provider);

  console.log("Specific user account: ", accountList[index]);

  return accountList[index];
}

async function getUserBalanceInWallet(provider, account) {
  // Output in Wei
  const balance = await provider.getBalance(account);

  console.log("Wallet Balance in wei: ", balance);

  return balance;
}

function createContractInstance(provider, networkJson, chainId, abiJson) {
  const contractAddress = getSmartContractAddress(networkJson, chainId);
  const abi = getSmartContractAbi(abiJson);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  console.log("Signer: ", signer);
  console.log("Contract: ", contract);

  return contract;
}

async function getUserBalanceInDex(contractInstance, tokenAddress, account) {
  // Total amount of asset the user has
  // i.e. free coin amount (not in order) + coin amount waiting in order (locked)
  // Output in Wei
  tokenAddress = normalizeAddress(tokenAddress);
  account = normalizeAddress(account);

  const balance = await contractInstance.balanceOf(tokenAddress, account);

  console.log("User balance in dex (wei): ", balance);

  return balance;
}

async function getUserBalanceInUse(contractInstance, tokenAddress, account) {
  // Total coin amount waiting in order (locked)
  // Output in Wei
  tokenAddress = normalizeAddress(tokenAddress);
  account = normalizeAddress(account);

  const balanceInUse = await contractInstance.balanceInUse(
    tokenAddress,
    account
  );

  console.log("User balance in use in dex (wei): ", balanceInUse);

  return balanceInUse;
}

async function getOrderHistory(contractInstance, account) {
  account = normalizeAddress(account);
  const orderHistory = await contractInstance.getArrayOfferFromHistory(account);

  console.log("Order history array: ", orderHistory);

  return orderHistory;
}

async function giveOrder(
  contractInstance,
  amountGive,
  tokenGive,
  amountGet,
  tokenGet,
  position = ethers.constants.Zero
) {
  amountGive = normalizeAmount(amountGive);
  tokenGive = normalizeAddress(tokenGive);
  amountGet = normalizeAmount(amountGet);
  tokenGet = normalizeAddress(tokenGet);
  position = ethers.utils.bigNumberify(position);

  const orderReceipt = await contractInstance.offer(
    amountGive,
    tokenGive,
    amountGet,
    tokenGet,
    position
  );

  console.log("Normalized amountGive: ", amountGive);
  console.log("Order receipt: ", orderReceipt);

  return orderReceipt;
}

async function cancelOrder(contractInstance, orderId) {
  orderId = ethers.utils.bigNumberify(orderId);
  const cancelReceipt = await contractInstance.cancel(orderId);

  console.log("Cancel order receipt: ", cancelOrder);

  return cancelReceipt;
}

// TESTS
// Below is just for usage examples and checking console outputs
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const selectedNetwork = selectNetwork(networkConf);
  getSmartContractAddress(deployedNetwork, selectedNetwork.chainId);
  getSmartContractAbi(abi);

  await getUserAccountList(web3Provider);
  const account = await getUserAccount(web3Provider);
  await getUserBalanceInWallet(web3Provider, account);

  const contractInstance = createContractInstance(
    web3Provider,
    deployedNetwork,
    selectedNetwork.chainId,
    abi
  );

  const UserBalanceInDex = await getUserBalanceInDex(
    contractInstance,
    ethers.constants.AddressZero,
    account
  );
  console.log("UserBalanceInDex in Ether: ", weiToEther(UserBalanceInDex));
  const UserBalanceInUse = await getUserBalanceInUse(
    contractInstance,
    ethers.constants.AddressZero,
    account
  );
  console.log("UserBalanceInUse in Ether: ", weiToEther(UserBalanceInUse));

  // Give a small amount of order for test
  await giveOrder(contractInstance, payAmt, payToken, buyAmt, buyToken);
  await sleep(5000); // wait a bit just for test
  await getOrderHistory(contractInstance, account);
})();
