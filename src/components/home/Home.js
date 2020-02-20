import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col
} from "react-bootstrap";
import { LeftSide } from './left_side/LeftSide';
import { Center } from './center/Center';
import { RightSide } from './right_side/RightSide';
import MarketsMobile from './mobile/MarketsMobile';


const Home = () => {
  useEffect( () => {
    // console.log('Home, ', Date.now())
  }, [])
  return (
    // <Fragment>
    //   <h4
    //     className='text-light'
    //   >
    //     Home
    //   </h4>
    <Row
      className="m-0"
      style={{
        minHeight:'70vh'
      }}
    >
      <MarketsMobile />

      <LeftSide />
      <Center />
      <RightSide />

    </Row>
    // </Fragment>
  );
}

Home.propTypes = {

}

export default Home
