import React from 'react'
import {  Row, Col } from "react-bootstrap";
import { Prices } from './prices/Prices';


export const LeftSide = () => {
  return (
    <Col
      sm={3}
      className='bg-warning m-0 p-1'
      style={{
        minHeight: "50vh",
        borderRadius: "1rem"
      }}
    >
      <Prices />
      <Row
        className='bg-danger m-0'
        style={{
          height: "250px"
        }}
      >
        <h5 className='text-white p-0 m-0'>Left Side2</h5>
        {/* <button>Click</button> */}
      </Row>
    </Col>
  );
}
