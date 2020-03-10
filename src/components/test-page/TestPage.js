import React, {useState} from 'react'
import { connect } from "react-redux";
import { createLoomChain, createEthChain } from '../../actions/testActions';


const TestPage = ({
  createLoomChain,
  createEthChain,
  testReducer
}) => {

  const [ loomKey, setLoomKey ] = useState('')
  const [ ethKey, setEthKey ] = useState('')

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
    </div>
  )
}

const mapStateToProps = state => ({
  testReducer: state.testReducer
});

export default connect(mapStateToProps, { createLoomChain , createEthChain } ) (TestPage)

// export default TestPage
