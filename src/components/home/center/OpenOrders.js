import React from "react";
import { Col, Table } from "react-bootstrap";
import { OpenOrderItem } from "./sub/OpenOrderItem";

export const OpenOrders = () => {
  return (
    <Col sm={4} className='p-0'>
      <span className='d-block text-center text-light'>Open Orders</span>
      <Table striped bordered hover variant='dark' size='sm'>
        <tbody>
          <OpenOrderItem />
          <OpenOrderItem />
          <OpenOrderItem />
          <OpenOrderItem />
          <OpenOrderItem />
        </tbody>
      </Table>
    </Col>
  );
};
