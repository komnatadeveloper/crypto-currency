import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {  Col, Form, Button, Tabs, Tab } from 'react-bootstrap'

const BiddingMobile = ({inputStyle, definitionStyle, buttonStyle}) => {
  const [tab, setTab] = useState('buy-order-tab'); // "orders" OR "depth"
  return (
    <Fragment>
      {/* Title */}
      <div
        className='show-when-small'
        style={{
          width: "100%",
          height: "2rem"
        }}
      >
        <Tabs
          id='bidding-tabs'
          activeKey={tab}
          onSelect={k => {
            setTab(k);
            console.log(tab);
          }}
        >
          <Tab
            eventKey='buy-order-tab'
            title='Buy BTC'
            className='mr-2'
            style={{
              borderTopLeftRadius: "10px"
            }}
          >
            {/* Buy Order */}
            <div className='px-1 pb-2 show-when-small w-100' style={{}}>
              <div
                className='bg-dark d-flex flex-column pt-1 px-1'
                style={{
                  borderBottomLeftRadius: "1rem"
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
                  <span
                    className='text-warning text-sm-3'
                    style={definitionStyle}
                  >
                    Balance USDT: 0.00000000
                  </span>
                  <Button
                    variant='success'
                    className='text-sm-2'
                    style={buttonStyle}
                  >
                    Buy BTC
                  </Button>
                </div>
              </div>
            </div>
            {/* End of Buy Order */}
          </Tab>
          <Tab
            eventKey='sell-order-tab'
            title='Sell BTC'
            className='mr-2'
            style={{
              borderTopLeftRadius: "10px"
            }}
          >
            {/* Sell Order */}
            <div
              className='px-1 pb-2 show-when-small w-100'
              // className='bg-success d-flex flex-column pt-1'
            >
              <div
                className='bg-dark d-flex flex-column pt-1 px-1'
                style={{
                  borderBottomRightRadius: "1rem"
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
                  <span
                    className='text-warning text-sm-3'
                    style={definitionStyle}
                  >
                    Balance USDT: 0.00000000
                  </span>
                  <Button
                    variant='danger'
                    className='text-sm-2'
                    style={buttonStyle}
                  >
                    Sell BTC
                  </Button>
                </div>
              </div>
            </div>
            {/* End of Sell Order */}
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
}

BiddingMobile.propTypes = {

}

export default BiddingMobile
