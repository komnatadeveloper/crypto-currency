import React, {Fragment} from 'react'
import { Col, Table } from "react-bootstrap";
import { FundItem } from './sub/FundItem';


export const Funds = () => {
  return (
    <Fragment>    
      <span className='funds-header'>
        <p className='d-block text-center text-light'>Funds</p>
      </span>
      <div
        id='funds-section'
        className='  w-100 bg-dark'
        style={{
          borderBottomLeftRadius:'1rem',
          borderBottomRightRadius:'1rem'
        }}
      >
        <Table striped bordered hover variant='dark' size='sm'>
          <tbody className='scrollbar'>
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
            <FundItem />
          </tbody>
        </Table>

      </div>
    </Fragment>

  );
}
