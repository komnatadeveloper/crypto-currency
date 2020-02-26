import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";

const TradeHistoryItem = () => {
  const textSize = ' text-sm-2 '
  const textSizeBtn = ' text-sm-3 '
  return (
    <tr>
      <td className={`${textSize} text-right`}>0.0000</td>
      <td className={`${textSize} text-center`}>USDT/ETH</td>
      <td className={`${textSize} text-center`}>USDT</td>
      <td className={`${textSize} text-right`}>0.0000</td>
      <td className={`${textSize} text-right`}>0.0000</td>
      <td className={`${textSize} text-center`}>Sell</td>
      <td className={`${textSize} text-center`}>Completed</td>
      <td className={`${textSizeBtn} trade-button`}>
        <Button className={`${textSize}`} size='lg' variant="light">Trade</Button>
      </td>
    </tr>
  )
}

TradeHistoryItem.propTypes = {

}

export default TradeHistoryItem
