import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Table } from "react-bootstrap";
import { OpenOrders } from './OpenOrders';
import { TradeHistory } from './TradeHistory';
import { Funds } from '../right_side/Funds';

const OpenOrdersTradeHistoryFundsMobile = () => {
  const [tab, setTab] = useState("trade-history-mobile-tab"); //"trade-history-mobile-tab"  "funds-mobile-tab" OR "open-orders-mobile-tab"

  return (
    <div
      id='open-ord-trd-hist-mobile'
      style={{
        backgroundColor:'#222'
      }}
    >
      {/* Tabs */}
      <Tabs
        id='open-ord-trd-hist-mobile-tabs'
        activeKey={tab}
        onSelect={k => {
          setTab(k);
          console.log(tab);
        }}
      >
        <Tab
          eventKey='trade-history-mobile-tab'
          title='Trade History'
          className='mr-2'
          style={{
            borderTopLeftRadius: "10px"
          }}
        >
          <TradeHistory />
        </Tab>

        <Tab eventKey='funds-mobile-tab' title='Funds' className='mr-2'>
          <div id="funds-tab">
            <Funds />
          </div>
        </Tab>
        <Tab
          eventKey='open-orders-mobile-tab'
          title='Open Orders'
          className='mr-2'
        >
          <OpenOrders />
          
        </Tab>
      </Tabs>
    </div>
  );
};

OpenOrdersTradeHistoryFundsMobile.propTypes = {

}

export default OpenOrdersTradeHistoryFundsMobile
