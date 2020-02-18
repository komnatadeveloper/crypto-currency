import React from 'react'
import PropTypes from 'prop-types'

const DepositHistoryItem = () => {
  const textSize = ' text-sm-2 '
  // const textColor = ' bg '
  return (
    <tr>
      <td className={`${textSize} col-others`}>0.0000</td>
      <td className={`${textSize} col-others`}>Complete</td>
      <td className={`${textSize} col-assets`} >Basic Attention</td>
      <td className={`${textSize} col-others`}>USDT</td>
      <td className={`${textSize} col-others`}>0.0000</td>
      <td className={`${textSize} col-from`}>0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae</td>
    </tr>
  )
}

DepositHistoryItem.propTypes = {

}

export default DepositHistoryItem
