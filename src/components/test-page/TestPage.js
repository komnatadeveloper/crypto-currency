import React, {useState} from 'react'
import { connect } from "react-redux";
import { 
  // createLoomChain, 
  // createEthChain, 
  // // makeEtheriumWallet, 
  // // makeLoomWallet ,
  // createLoomAndEthKeys
} from '../../actions/testActions';

// import Portis from '@portis/web3';
import {Web3} from 'web3';



const TestPage = ({
  history
}) => {

  // const portis = new Portis('YOUR_DAPP_ID', 'maticTestnet');
  // const web3 = new Web3(portis.provider);

  const [account, setAccount] = useState(null)

  // web3.eth.getAccounts()
  //   .then( (accounts) => {
  //     setAccount(
  //       accounts[0]
  //     );
  //   } )


  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <div>
      TEST PAGE
    </div>

    
  )
}

const mapStateToProps = state => ({
  testReducer: state.testReducer
});

export default connect(
  mapStateToProps, 
  { 
    // createLoomChain , 
    // createEthChain ,
    // // makeEtheriumWallet,
    // // makeLoomWallet , 
    // createLoomAndEthKeys
  } 
  ) (TestPage)

// export default TestPage
