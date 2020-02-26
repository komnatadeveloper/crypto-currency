import React from 'react'
import PropTypes from 'prop-types'

const WithdrawHistoryItem = () => {
  const textSize = ' text-sm-2 '
  return (
    <tr>
      <td className={`${textSize} col-assets`} >Basic Attention</td>
      <td className={`${textSize} col-others`}>USDT</td>
      <td className={`${textSize} col-others`}>0.0000</td>
      <td className={`${textSize} col-others`}>0.0000</td>
      <td className={`${textSize} col-to`}>0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae</td>
      <td className={`${textSize} col-others`}>0.0000</td>
    </tr>
  )
}

WithdrawHistoryItem.propTypes = {

}

export default WithdrawHistoryItem
