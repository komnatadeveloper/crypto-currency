import React from 'react'
import PropTypes from 'prop-types'
import { Form } from "react-bootstrap";

const MarketsMobile = props => {
  return (
    <div id='markets-mobile' className='col col-12 ' style={{}}>
      <div className='div-for-bg' style={{}}>
        <Form.Control
          as='select'
          className='bg-dark text-light'
          style={{
            //  color:'blue',
            //  backgroundColor:'orange'
            // backgroundColor: "red"
          }}
        >
          <option className='test-time'>Bitcoin - BTC</option>
          <option>Ethereum - ETH</option>
          <option>Basic Attention - BAT</option>
        </Form.Control>
      </div>
    </div>
  );
}

MarketsMobile.propTypes = {

}

export default MarketsMobile
