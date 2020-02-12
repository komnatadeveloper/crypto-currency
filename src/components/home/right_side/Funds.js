import React from 'react'
import { Col, Table } from "react-bootstrap";
import { FundItem } from './sub/FundItem';


export const Funds = () => {
  return (
    <div
      id='funds-section'
      className='  w-100'
      style={{

      }}
    >
      <span className='funds-header'>
        <p className='d-block text-center text-light'>Funds</p>
      </span>
      <Table striped bordered hover variant='dark' size='sm'>
        <tbody>
          <FundItem />
          <FundItem />
          <FundItem />
          <FundItem />
          <FundItem />
        </tbody>
      </Table>

    </div>

  );
}
