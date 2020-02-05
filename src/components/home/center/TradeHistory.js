import React from "react";
import { Col, Table } from "react-bootstrap";
import { TradeHistoryItem } from "./sub/TradeHistoryItem";

export const TradeHistory = () => {
  return (
    <Col sm={4} className='p-0'>
      <span className='d-block text-center text-light'>Trade History</span>
      <Table striped bordered hover variant='dark' size='sm'>
        <tbody>
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
        </tbody>
      </Table>
    </Col>
  );
};
