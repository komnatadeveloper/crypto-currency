import React from "react";
import { Col, Table } from "react-bootstrap";
import { TradeHistoryItem } from "./sub/TradeHistoryItem";

export const TradeHistory = () => {
  return (
    <Col id='trade-history' sm={6} className='p-0'>
      <span
        id='trade-history-header'
        className='d-block text-center text-light text-sm-1'
      >
        Trade History
      </span>
      <div
        className='bg-dark mx-2 px-0 secondary-div'
        style={{
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          paddingBottom: ".5rem"
        }}
      >
        <Table striped bordered hover variant='dark' size='sm' className='mb-0'>
          <tbody className='scrollbar'>
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            <TradeHistoryItem />
            {/* <TradeHistoryItem /> */}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};
