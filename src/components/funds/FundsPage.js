import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col, Tabs, Tab, Form
} from "react-bootstrap";
import Assets from './Assets';
import Deposit from './Deposit';
import TradeHistory from './TradeHistory';
import Withdraw from './Withdraw';
import Helmet from "react-helmet";
// const BN = require('bn.js')
import  BN from 'bn.js'


export const FundsPage = () => {
  const [tab, setTab] = useState('assets'); // "orders" OR "depth"

  const a = new BN('deaddsfeFGGsdfswefsdffedsaadasc assasdsssd ', 16)
  console.log(typeof(a))
  console.log(a)
  return (
    // <Fragment>
    //   <h4
    //     className='text-light'
    //   >
    //     Home
    //   </h4>
    <div
      id='funds-page'
      className='m-0 w-100'
      style={{
        // minHeight: '70vh'
        backgroundColor: "#222"
      }}
    >
      <Helmet>
        <title>Funds</title>
      </Helmet>

      {/* Tabs */}
      <Tabs
        id='funds-page-tabs'
        activeKey={tab}
        onSelect={k => {
          setTab(k);
          console.log(tab);
        }}
      >
        <Tab
          eventKey='assets'
          title='Assets'
          className='mr-2'
          style={{
            borderTopLeftRadius: "10px"
          }}
        >
          <p className='text-white'>{a.toString()}</p>
          <Assets />
        </Tab>

        <Tab eventKey='deposit' title='Deposit' className='mr-2'>
          <Deposit />
        </Tab>

        <Tab eventKey='withdraw' title='Withdraw' className='mr-2'>
          <Withdraw />
        </Tab>

        <Tab eventKey='trade-history' title='Trade History' className='mr-2'>
          <TradeHistory />
        </Tab>
      </Tabs>
      {/* End of Tabs */}
    </div>
    // </Fragment>
  );
}

FundsPage.propTypes = {

}


