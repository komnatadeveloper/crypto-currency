import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Row, Col
} from "react-bootstrap";
import { LeftSide } from './left_side/LeftSide';
import { Center } from './center/Center';
import { RightSide } from './right_side/RightSide';


const Home = () => {
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
