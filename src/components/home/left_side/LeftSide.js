import React from 'react'
import {  Row, Col } from "react-bootstrap";
import { Prices } from './prices/Prices';


export const LeftSide = () => {
  return (
    <Col
      sm={3}
      id='market-left-side'
      className='m-0 pt-1  '

    >
      <div 
        className="mx-0 pb-2 px-1"
        style={{
          borderRadius: "1rem",
          backgroundColor: '#222',
          
        }}
      >
        <Prices />
      </div>

    </Col>
  );
}
// import React from 'react'
// import {  Row, Col } from "react-bootstrap";
// import { Prices } from './prices/Prices';


// export const LeftSide = () => {
//   return (
//     <Col
//       sm={3}
//       id='market-left-side'
//       className='m-0 pt-1 px-1 pb-2'
//       style={{
//         borderRadius: "1rem",
//         backgroundColor: '#222'
//       }}
//     >
//       <div 
//         className="mx-1"
//       >
//         <Prices />
//       </div>

//     </Col>
//   );
// }
