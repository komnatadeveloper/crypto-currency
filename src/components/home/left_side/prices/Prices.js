import React, {useState} from 'react'
import { Tabs, Tab, Table } from "react-bootstrap";
import { PriceItem } from './sub/PriceItem';


export const Prices = () => {

  const [tab, setTab] = useState('orders'); // "orders" OR "depth"

  return (
    <div className='d-flex flex-column d-block mx-1'>
      {/* Tabs */}
      <Tabs
        id='controlled-tab-example'
        activeKey={tab}
        onSelect={k => {
          setTab(k);
          console.log(tab);
        }}
      >
        <Tab
          eventKey='orders'
          title='Orders'
          className='mr-2'
          style={{
            borderTopLeftRadius: "10px"
          }}
        >
          {/* Orders Tab */}
          {/* Sell Table */}
          <div className='m-0 p-0' style={{height:'50vh'}}>

          </div>
          <Table 
            size='sm' 
            striped bordered hover 
            variant='dark'
            style={{height:'40%'}}
          >
            <thead>
              <tr>
                <th>Price</th>
                <th>BTC</th>
                <th>USDT</th>
              </tr>
            </thead>
            <tbody>
              <PriceItem />
              <PriceItem />
              <PriceItem />
              <PriceItem />
              <PriceItem />
            </tbody>
          </Table>
          {/* End of Sell Table */}

          {/* Price Explanation */}
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-column align-items-center'>
              <span>
                <span className='text-sm-2'>24h Change: </span>
                <span className='text-sm-2'>1%</span>
              </span>
              <span>
                <span className='text-sm-2'>7500 USDT / 1 BTC</span>
              </span>
            </div>
            <div>
              <div
                style={{
                  margin: "0",
                  position: "relative",
                  top: "50%",
                  msTransform: "translateY(-50%)",
                  transform: "translateY(-50%)"
                }}
              >
                <span className='text-sm-1'>Last: </span>
                <span className='text-sm-1  text-success'>7584.81 USDT</span>
              </div>
            </div>
          </div>
          {/* End of Price Explanation */}

          {/* Buy Table */}
          <Table
            size='sm'
            striped
            bordered
            hover
            variant='dark'
            className='mb-0'
          >
            <tbody>
              <PriceItem />
              <PriceItem />
              <PriceItem />
              <PriceItem />
              <PriceItem />
            </tbody>

            <tfoot>
              <tr>
                <th>Price</th>
                <th>BTC</th>
                <th>USDT</th>
              </tr>
            </tfoot>
          </Table>
          {/* End of Buy Table */}
          {/* End of Orders Tab */}
        </Tab>
        <Tab eventKey='depth' title='Depth' className='mr-2'></Tab>
      </Tabs>
    </div> // End of Component
  );
}
