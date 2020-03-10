import React, {useState} from 'react'
import { connect } from "react-redux";
import { 
  createLoomChain, 
  createEthChain, 
  makeEtheriumWallet, 
  makeLoomWallet 
} from '../../actions/testActions';


const TestPage = ({
  createLoomChain,
  createEthChain,
  makeEtheriumWallet,
  makeLoomWallet,
  testReducer
}) => {

  const [ loomKey, setLoomKey ] = useState('')
  const [ ethKey, setEthKey ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <div>
      <h1
        className='text-white'
      >LOOM</h1>
      <button
        onClick= { e => {
          console.log(loomKey);
          console.log(testReducer);
        }

        }
      
      >Test</button>

      <button
        onClick= { () => {
          createLoomChain(loomKey )
        }}
      >Connect</button>
      <input 
        type="text" 
        value={loomKey} 
        onChange= { e => {
          setLoomKey(e.target.value)
        }}
        id='test-button'
      />
      <label htmlFor="test-button">Private Key</label>
      <h1
        className='text-white'
      >Etherium</h1>
      <button
        onClick= { e => {
          console.log(ethKey);
          console.log(testReducer);
        }

        }
      
      >Test</button>

      <button
        onClick= { () => {
          createEthChain(ethKey )
        }}
      >Connect</button>
      <input 
        type="text" 
        value={ethKey} 
        onChange= { e => {
          setEthKey(e.target.value)
        }}
        id='test-button2'
      />
      <label htmlFor="test-button2">Private Key</label>
      <h1
        className='text-white'
      >Create Key</h1>
      <div>
        <input
          type="email"
          name="email"
          value={email}
          id=""
          onChange={e => {
            setEmail ( e.target.value)
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          id=""
          onChange={e => {
            setPassword( e.target.value)
          }}
        />
        <button
          onClick= { () => {

            // makeLoomWallet({email, password})
            makeEtheriumWallet({email, password})
          }}
        >
          Create Key
      </button>
      </div>
    </div>

    
  )
}

const mapStateToProps = state => ({
  testReducer: state.testReducer
});

export default connect(
  mapStateToProps, 
  { createLoomChain , 
    createEthChain ,
    makeEtheriumWallet,
    makeLoomWallet 
  } 
  ) (TestPage)

// export default TestPage
