import React from 'react'
import { Col, Table } from "react-bootstrap";
import { FundItem } from './sub/FundItem';


export const Funds = () => {
  return (
    <Col sm={4} className='p-0'>
      <span className='d-block text-center text-light'>Funds</span>
      <Table striped bordered hover variant='dark' size='sm'>
        <tbody>
          <FundItem />
          <FundItem />
          <FundItem />
          <FundItem />
          <FundItem />
        </tbody>
      </Table>
    </Col>
  );
}
