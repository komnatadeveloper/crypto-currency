import React from "react";
import { Col, Table } from "react-bootstrap";
import { OpenOrderItem } from "./sub/OpenOrderItem";

export const OpenOrders = () => {
  return (
    <Col 
      id='open-orders'
      sm={6} 
      className='p-0'
    >
      <span 
        id='open-orders-header'
        className='d-block text-center text-light text-sm-1'
      >
        Open Orders
      </span>

      <div
        className='bg-dark mx-2 px-0 secondary-div'
        style={{
          borderBottomLeftRadius:'1rem',
          borderBottomRightRadius:'1rem',
          paddingBottom:'.5rem'
        }}
      >
        <Table striped bordered hover variant='dark' size='sm' className='mb-0'>
          <tbody className='scrollbar'>
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            <OpenOrderItem />
            {/* <OpenOrderItem />
            <OpenOrderItem /> */}
          </tbody>
        </Table>
      </div>

    </Col>
  );
};
