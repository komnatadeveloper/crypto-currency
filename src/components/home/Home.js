import React, { Fragment, useEffect, Component } from "react";
// import PropTypes from 'prop-types'
import {
  Row, Col
} from "react-bootstrap";
import { LeftSide } from './left_side/LeftSide';
import { Center } from './center/Center';
import { RightSide } from './right_side/RightSide';
import MarketsMobile from './mobile/MarketsMobile';
import Helmet from 'react-helmet'



import PropTypes from 'prop-types'

export default class Home extends Component {
  static propTypes = {
    // prop: PropTypes.func.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }
  componentDidMount() {
    console.log('Home componentDidMount')
  }

  

  render() {
    return (
      <Row
      className="m-0"
      style={{
        minHeight:'70vh'
      }}
    >
      <Helmet>
        <title>Markets</title>
      </Helmet>

      <MarketsMobile />

      <LeftSide />
      <Center />
      <RightSide />

    </Row>
    )
  }
}



// const Home = () => {
//   useEffect( () => {
//     // console.log('Home, ', Date.now())
//   }, [])
//   return (
//     <Row
//       className="m-0"
//       style={{
//         minHeight:'70vh'
//       }}
//     >
//       <Helmet>
//         <title>Markets</title>
//       </Helmet>

//       <MarketsMobile />

//       <LeftSide />
//       <Center />
//       <RightSide />

//     </Row>
//   );
// }

// Home.propTypes = {

// }

// export default Home
