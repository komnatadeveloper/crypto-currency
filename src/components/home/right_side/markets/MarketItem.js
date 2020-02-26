import React from 'react'

export const MarketItem = () => {
  const textSize = ' text-sm-3 '

  return (

      <tr
        onClick={ e => {
          console.log('Market Item has been clicked')
        }}
      >
        <td className={`${textSize} col-others text-center`}>Bitcoin</td>
        <td className={`${textSize} col-others text-center`}>BTC</td>
        <td className={`${textSize} text-success text-right col-change`}>4.5%</td>
        <td className={`${textSize} col-price text-right pl-0`}>0.0000</td>
      </tr>

  );
}
