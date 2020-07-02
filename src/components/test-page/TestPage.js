import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import {
  Button, Modal
} from 'react-bootstrap'
import { 
  // createLoomChain, 
  // createEthChain, 
  // // makeEtheriumWallet, 
  // // makeLoomWallet ,
  // createLoomAndEthKeys
} from '../../actions/testActions';

import Portis from '@portis/web3';
import Web3 from 'web3';



const TestPage = ({
  history
}) => {

  const [portis, setPortis] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [walletOption, setWalletOption] = useState(null)
  

  // const portis = new Portis('45b0f39e-0d65-43e4-8e67-3a58c16b3da3', 'mainnet');
  // const web3 = new Web3(portis.provider);

  const [account, setAccount] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(
    () => {
      console.log('TestPage -> useEffect FIRED');
      switch (walletOption) {

        case 'portis':
          const _portis = new Portis('45b0f39e-0d65-43e4-8e67-3a58c16b3da3', 'mainnet');
          const _web3 = new Web3(_portis.provider)
          setPortis( 
            _portis 
          );
          setWeb3(
            _web3
          );
          _web3.eth.getAccounts()
            .then( (accounts) => {
              console.log('TestPage -> getAccounts -> accounts ->', accounts)
              setAccount(
                accounts[0]
              );
            } )
          break;
        default:
          break;
      }
    }, 
    [walletOption]
  )



  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex flex-row justify-content-end pr-5 pt-4'>

        <Button onClick={handleShow}>Connect to a Wallet</Button>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal heading</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex flex-column'>
              <div 
                className='d-flex border p-3 mb-3'
                onClick={ () => {
                  setWalletOption('portis')
                  handleClose();
                }}
              >Portis Option</div>
              <div
                className='d-flex border p-3 mb-3'
                onClick={ () => {
                  setWalletOption('walletConnect')
                }}
              >WalletConnect Option</div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
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
