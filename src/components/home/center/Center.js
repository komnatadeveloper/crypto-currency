import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Graph } from './graph/Graph';
import { Bidding } from './Bidding';
import { Funds } from './Funds';
import { OpenOrders } from './OpenOrders';
import { TradeHistory } from './TradeHistory';



export const Center = () => {
  return (
    <Col
      sm={6}
      className='bg-dark m-0 p-1'
      style={{
        minHeight: "50vh",
        borderRadius: "1rem"
      }}
    >
      <div className='d-flex flex-column'>
        <Graph />
        <Bidding />

        <Row className='m-0'>
          <Funds />
          <OpenOrders />
          <TradeHistory />
        </Row>
      </div>
    </Col>
  );
}
