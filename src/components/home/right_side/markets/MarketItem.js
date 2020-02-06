import React from 'react'

export const MarketItem = () => {
  return (

      <tr
        onClick={ e => {
          console.log('Market Item has been clicked')
        }}
      >
        <th className='text-sm-3'>Bitcoin</th>
        <th className='text-sm-3'>BTC</th>
        <th className='text-sm-3 text-success'>4.5%</th>
        <th className='text-sm-3'>0.0000</th>
      </tr>

  );
}
