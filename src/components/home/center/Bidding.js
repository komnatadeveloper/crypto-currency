import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export const Bidding = () => {
  return (
    <Row className='m-0'>
      {/* Buy Order */}
      <Col sm={6} className='bg-success d-flex flex-column'>
        {/* Price Row */}
        <div className='d-flex flex-row justify-content-between my-1'>
          <span
            className='text-light'
            style={{
              height: "1rem",
              display: "inline-block",
              lineHeight: "1rem",
              margin: "0",
              position: "relative",
              top: "50%",
              msTransform: "translateY(-50%)",
              transform: "translateY(-50%)"
            }}
          >
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
          <span
            className='text-light'
            style={{
              height: "1rem",
              display: "inline-block",
              lineHeight: "1rem",
              margin: "0",
              position: "relative",
              top: "50%",
              msTransform: "translateY(-50%)",
              transform: "translateY(-50%)"
            }}
          >
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
          <span
            className='text-light'
            style={{
              height: "1rem",
              display: "inline-block",
              lineHeight: "1rem",
              margin: "0",
              position: "relative",
              top: "50%",
              msTransform: "translateY(-50%)",
              transform: "translateY(-50%)"
            }}
          >
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
        <div className='d-flex flex-row justify-content-between mb-1'>
          <span
            className='text-warning'
            style={{
              height: "1rem",
              display: "inline-block",
              lineHeight: "1rem",
              margin: "0",
              position: "relative",
              top: "50%",
              msTransform: "translateY(-50%)",
              transform: "translateY(-50%)"
            }}
          >
            Total
            <span className='text-sm-3'>{" (You will pay)"}</span>
          </span>
          <Form.Control
            type='text'
            placeholder='name@example.com'
            style={{ maxWidth: "45%" }}
          />
        </div>
      </Col>
      {/* End of Buy Order */}
      <Col sm={6}>Sell Order</Col>
    </Row>
  );
}
