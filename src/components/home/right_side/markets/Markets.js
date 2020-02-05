import React, { useState } from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
import { MarketItem } from "./MarketItem";
// import { PriceItem } from "./sub/PriceItem";


export const Markets = () => {

  return (
    <div className='d-flex flex-column d-block mx-1'>
      <span className='d-block text-center text-light'>Markets</span>
      {/* Market Table */}
      <Table size='sm' striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th className='text-sm-2'>Coins</th>
            <th className='text-sm-2'>Ticker</th>
            <th className='text-sm-2'>Change</th>
            <th className='text-sm-2'>{"Price (USDT)"}</th>
          </tr>
        </thead>
        <tbody>
          <MarketItem />
          <MarketItem />
          <MarketItem />
          <MarketItem />
          <MarketItem />
          <MarketItem />
          <MarketItem />
        </tbody>
      </Table>
      {/* End of Market Table */}
    </div> // End of Component
  );
};
