import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

export const Bidding = () => {

  const buttonStyle = {
    padding: ".1rem 2rem",
    borderTopLeftRadius: "3rem",
    borderBottomLeftRadius: "3rem",
    borderTopRightRadius: "3rem",
    borderBottomRightRadius: "3rem"
  };

  const definitionStyle = {
    height: "1rem",
    display: "inline-block",
    lineHeight: "1rem",
    margin: "0",
    position: "relative",
    top: "50%",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)"
  };

  return (
    <Row className='m-0'>
      {/* Title */}
      <Col
        sm={12}
        style={{
          height: "2rem"
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
      <Col sm={6} className='bg-danger d-flex flex-column pt-1'>
        {/* Price Row */}
        <div className='d-flex flex-row justify-content-between my-1'>
          <span className='text-light' style={definitionStyle}>
            Price
          </span>
          <Form.Control
            type='text'
            placeholder='name@example.com'
            style={{ maxWidth: "45%" }}
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
            placeholder='name@example.com'
            style={{ maxWidth: "45%" }}
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
            style={{ maxWidth: "45%" }}
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
      </Col>
      {/* End of Buy Order */}

      {/* Sell Order */}
      <Col sm={6} className='bg-success d-flex flex-column pt-1'>
        {/* Price Row */}
        <div className='d-flex flex-row justify-content-between my-1'>
          <span className='text-light' style={definitionStyle}>
            Price
          </span>
          <Form.Control
            type='text'
            placeholder='name@example.com'
            style={{ maxWidth: "45%" }}
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
            style={{ maxWidth: "45%" }}
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
            style={{ maxWidth: "45%" }}
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
      </Col>
      {/* End of Sell Order */}
    </Row>
  );
}
