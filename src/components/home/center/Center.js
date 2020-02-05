import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Graph } from './graph/Graph';
import { Bidding } from './Bidding';


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
      <div className="d-flex flex-column">
        <Graph />
        <Bidding />

      </div>
    </Col>
  );
}
