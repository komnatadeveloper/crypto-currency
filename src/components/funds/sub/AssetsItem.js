import React from 'react'
import PropTypes from 'prop-types'

const AssetsItem = () => {
  const textSize = ' text-sm-2 '
  return (
    <tr>
      <td className={`${textSize} `}><i className="fas fa-star text-warning"></i></td>
      <td className={`${textSize}`}>Basic Attention</td>
      <td className={`${textSize}`}>USDT</td>
      <td className={`${textSize}`}>0.0000</td>
      <td className={`${textSize}`}>0.0000</td>
      <td className={`${textSize} text-success`}>7.2%</td>
      <td className={`${textSize}`}>0.0000</td>
      <td className={`${textSize}`}>0.0000</td>
      <td className={`${textSize}`}>0.0000</td>
      <td className={`${textSize}`}>Trade</td>
    </tr>
  )
}

AssetsItem.propTypes = {

}

export default AssetsItem
