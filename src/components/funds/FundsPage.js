import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col, Tabs, Tab, Form
} from "react-bootstrap";
import Assets from './Assets';
import Deposit from './Deposit';
import TradeHistory from './TradeHistory';
import Withdraw from './Withdraw';




export const FundsPage = () => {
  const [tab, setTab] = useState('assets'); // "orders" OR "depth"
  return (
    // <Fragment>
    //   <h4
    //     className='text-light'
    //   >
    //     Home
    //   </h4>
    <div
      id='funds-page'
      className="m-0 w-100"
      style={{
        // minHeight: '70vh'
        backgroundColor:'#222'
      }}
    >

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


