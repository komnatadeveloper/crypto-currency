import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Markets } from './markets/Markets';
import { Funds } from './Funds';


export const RightSide = () => {
  return (
    <Col
      sm={3}
      id='market-right-side'
      className=' m-0 pt-1'
      style={{
        minHeight: "50vh",
        borderRadius: "1rem"
      }}
    >
      <div
        className="mx-0 pb-2 px-1 "
        style={{
          borderRadius: "1rem",
          backgroundColor: '#222',
          height:'calc( 100% )'
        }}
      >
        <Markets/>
        <Funds />
      </div>
      {/* <Row
        className='bg-danger m-0'
        style={{
          height: "250px"
        }}
      >
        <h5 className='text-white p-0 m-0'>Right Side</h5>
        <button>Click</button>
      </Row> */}
    </Col>
  );
}
