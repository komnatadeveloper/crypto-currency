import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Col, Form, Button } from 'react-bootstrap'

const BiddingWideScreen = ({ inputStyle, definitionStyle, buttonStyle }) => {
  return (
    <Fragment>
      {/* Title */}
      <Col
        className='hide-when-small'
        sm={12}
        style={{
          height: "2rem",

        }}
      >
        <p
          className='d-inline-block text-light'
          style={{
            height: "1rem",
            width: "80%",
            display: "inline-block",
            lineHeight: "1rem",
            margin: "0",
            position: "relative",
            top: ".75rem", // (colHeight - height / 2 ) / 2
            left: "10%",
            textAlign: "center",
            msTransform: "translateY(-50%)",
            transform: "translateY(-50%)"
          }}
        >
          Buy BTC - Sell BTC
        </p>
        <span
          className='d-inline-block text-warning'
          style={{
            height: "1rem",
            width: "6rem",
            display: "inline-block",
            lineHeight: "1rem",
            margin: "0",
            position: "relative",
            top: ".75rem", // (colHeight - height / 2 ) / 2
            right: "-3.5rem",
            textAlign: "center",
            msTransform: "translateY(-50%)",
            transform: "translateY(-50%)"
          }}
        >
          Advanced
        </span>
      </Col>

      {/* Buy Order */}
      <Col
        sm={6}
        className='p-1 hide-when-small'
        style={{

        }}
      >
        <div
          className='bg-dark d-flex flex-column pt-1 px-1'
          style={{
            borderBottomLeftRadius: "1rem",

          }}
        >
          {/* Price Row */}
          <div className='d-flex flex-row justify-content-between my-1'>
            <span className='text-light' style={definitionStyle}>
              Price
          </span>
            <Form.Control
              type='text'
              placeholder='7584.81 USDT'
              style={inputStyle}
            />
          </div>
          {/* Amount Row */}
          <div className='d-flex flex-row justify-content-between mb-1'>
            <span className='text-light' style={definitionStyle}>
              Amount
            <span className='text-sm-3'>{" (You will buy)"}</span>
            </span>
            <Form.Control
              type='text'
              placeholder='0.00000000 BTC'
              style={inputStyle}
            />
          </div>
          {/* Total Row */}
          <div className='d-flex flex-row justify-content-between mb-1'>
            <span className='text-light' style={definitionStyle}>
              Total
            <span className='text-sm-3'>{" (You will pay)"}</span>
            </span>
            <Form.Control
              type='text'
              placeholder='0.00000000 USDT'
              style={inputStyle}
            />
          </div>
          {/* Button Row */}
          <div className='d-flex flex-row justify-content-between mt-1 mb-2'>
            <span className='text-warning text-sm-3' style={definitionStyle}>
              Balance USDT: 0.00000000
          </span>
            <Button variant='success' className='text-sm-2' style={buttonStyle}>
              Buy BTC
          </Button>
          </div>
        </div>

      </Col>
      {/* End of Buy Order */}

      {/* Sell Order */}
      <Col
        sm={6}
        className='p-1 hide-when-small'
      // className='bg-success d-flex flex-column pt-1'
      >

        <div
          className='bg-dark d-flex flex-column pt-1 px-1'
          style={{
            borderBottomRightRadius: "1rem",
          }}
        >
          {/* Price Row */}
          <div className='d-flex flex-row justify-content-between my-1'>
            <span className='text-light' style={definitionStyle}>
              Price
          </span>
            <Form.Control
              type='text'
              placeholder='name@example.com'
              style={inputStyle}
            />
          </div>
          {/* Amount Row */}
          <div className='d-flex flex-row justify-content-between mb-1'>
            <span className='text-light' style={definitionStyle}>
              Amount
            <span className='text-sm-3'>{" (You will sell)"}</span>
            </span>
            <Form.Control
              type='text'
              placeholder='name@example.com'
              style={inputStyle}
            />
          </div>
          {/* Total Row */}
          <div className='d-flex flex-row justify-content-between mb-1'>
            <span className='text-light' style={definitionStyle}>
              Total
            <span className='text-sm-3'>{" (You will pay)"}</span>
            </span>
            <Form.Control
              type='text'
              placeholder='name@example.com'
              style={inputStyle}
            />
          </div>
          {/* Button Row */}
          <div className='d-flex flex-row justify-content-between mt-1 mb-2'>
            <span className='text-warning text-sm-3' style={definitionStyle}>
              Balance USDT: 0.00000000
          </span>
            <Button variant='danger' className='text-sm-2' style={buttonStyle}>
              Sell BTC
          </Button>
          </div>
        </div>
      </Col>
      {/* End of Sell Order */}
      
    </Fragment>
  )
}

BiddingWideScreen.propTypes = {

}

export default BiddingWideScreen
