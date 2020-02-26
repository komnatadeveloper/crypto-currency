import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Bidding } from './Bidding';
import { OpenOrders } from './OpenOrders';
import { TradeHistory } from './TradeHistory';
import { SizedGraph } from './graph/SizedGraph.';
import { SizedGraphMobile } from './graph/SizedGraphMobile';
import { Graph } from './graph/Graph';
import { GraphMobile } from './graph/GraphMobile';
import { OrdersDepthMobile } from './OrdersDepthMobile';
import OpenOrdersTradeHistoryFundsMobile from './OpenOrdersTradeHistoryFundsMobile';



export const Center = () => {
  return (
    <Col
      sm={6}
      id='market-center'
      className='bg-dark m-0 p-1'
      style={{
        minHeight: "50vh",
        borderRadius: "1rem"
      }}
    >

      <div className='d-flex flex-column'>
        {/* Hide When Small Screen */}
        <div className='m-0 graph-wide-screen'>
          <SizedGraph/>
        </div>
        
        {/* Show When Small Screen */}
        {/* <div className='m-0 graph-small-screen'>          
          <SizedGraphMobile/>
        </div> */}


        <Bidding />
        <OrdersDepthMobile />

        <Row 
          className='m-0'
          id='open-ord-trd-hist'          
          style={{
            backgroundColor:'#222',
            borderRadius:'1rem'
          }}
        >
          {/* <Funds /> */}
          <OpenOrders />
          <TradeHistory />

          
        </Row>
        <OpenOrdersTradeHistoryFundsMobile />
      </div>
    </Col>
  );
}
