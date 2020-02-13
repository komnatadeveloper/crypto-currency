import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import BiddingMobile from './BiddingMobile';
import BiddingWideScreen from './BiddingWideScreen';


export const Bidding = () => {

  const buttonStyle = {
    padding: ".1rem 2rem",
    borderTopLeftRadius: "3rem",
    borderBottomLeftRadius: "3rem",
    borderTopRightRadius: "3rem",
    borderBottomRightRadius: "3rem"
  };

  const offsetTop = '.25rem'

  const definitionStyle = {
    height: "1rem",
    display: "inline-block",
    lineHeight: "1rem",
    margin: "0",
    position: "relative",
    // top: "50%",
    // msTransform: "translateY(-50%)",
    // transform: "translateY(-50%)"
    top: `${offsetTop}`,
    // msTransform: `translateY(-${offsetTop})`,
    // transform: `translateY(-${offsetTop})`
  };

  const inputStyle = {
    maxWidth: "50%",
    height: '1.5rem',
    fontSize: '.8rem',
    textAlign: 'right',
    fontWeight: '550'
  }

  return (
    <Row 
      className='mx-0 my-2'
      id='buy-sell-bidding'
      style={{
        borderRadius: '1rem',
        backgroundColor: '#222'
      }}
    >
      <BiddingMobile 
        inputStyle={inputStyle}
        definitionStyle={definitionStyle}
        buttonStyle={buttonStyle}
      />
      <BiddingWideScreen 
        inputStyle={inputStyle}
        definitionStyle={definitionStyle}
        buttonStyle={buttonStyle}
      />
      
    </Row>
  );
}
