import React from 'react'
import { Row, Col } from "react-bootstrap";

export const RightSide = () => {
  return (
    <Col
      sm={3}
      className='bg-warning m-0 p-0'
      style={{
        minHeight: "50vh"
      }}
    >
      <Row
        className='bg-danger m-0'
        style={{
          height: "250px"
        }}
      >
        <h5 className='text-white p-0 m-0'>Right Side</h5>
        <button>Click</button>
      </Row>
    </Col>
  );
}
