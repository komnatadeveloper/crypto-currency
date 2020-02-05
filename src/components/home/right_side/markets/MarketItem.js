import React from 'react'

export const MarketItem = () => {
  return (
    <a href="#">
      <tr>
        <th className='text-sm-2'>Coins</th>
        <th className='text-sm-2'>Ticker</th>
        <th className='text-sm-2'>Change</th>
        <th className='text-sm-2'>{"Price (USDT)"}</th>
      </tr>
    </a>
  );
}
