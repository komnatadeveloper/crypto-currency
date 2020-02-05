import React from 'react'
import { Row, Col } from "react-bootstrap";

export const Center = () => {
  return (
    <Col
      sm={6}
      className='bg-success m-0 p-1'
      style={{
        minHeight: "50vh",
        borderRadius:'1rem'
      }}
    >
      <Row
        className='bg-primary m-0'
        style={{
          height: "250px"
        }}
      >
        <h5 className='text-white p-0 m-0'>Center</h5>
        <button>Click</button>
      </Row>
    </Col>
  );
}
