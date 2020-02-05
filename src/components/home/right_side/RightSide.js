import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Markets } from './markets/Markets';


export const RightSide = () => {
  return (
    <Col
      sm={3}
      className='bg-primary m-0 p-1'
      style={{
        minHeight: "50vh",
        borderRadius: "1rem"
      }}
    >
      <Markets/>
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
