import React, {useState} from 'react'
import { connect } from "react-redux";
import { createChain } from '../../actions/testActions';


const TestPage = ({
  createChain,
  testReducer
}) => {

  const [ key, setKey ] = useState('')

  return (
    <div>
      <button
        onClick= { e => {
          console.log(key);
          console.log(testReducer);
        }

        }
      
      >Test</button>

      <button
        onClick= { () => {
          createChain(key )
        }}
      >Connect</button>
      <input 
        type="text" 
        value={key} 
        onChange= { e => {
          setKey(e.target.value)
        }}
        id='test-button'
      />
      <label htmlFor="test-button">Private Key</label>
    </div>
  )
}

const mapStateToProps = state => ({
  testReducer: state.testReducer
});

export  default connect( mapStateToProps,  {createChain} ) (TestPage)

// export default TestPage
