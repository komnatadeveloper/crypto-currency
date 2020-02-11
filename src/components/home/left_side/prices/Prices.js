import React, {useState} from 'react'
import { Tabs, Tab, Table } from "react-bootstrap";
import { PriceItem } from './sub/PriceItem';


export const Prices = () => {

  const [tab, setTab] = useState('orders'); // "orders" OR "depth"

  return (
    <div className='d-flex flex-column d-block mx-1'>
      {/* Tabs */}
      <Tabs
        id='order-depth-tab'
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
          <div className='m-0 p-0 d-dlex flex-column' id='orders-tab'>
            {/* Sell Table */}
            <div
              id='prices-sell'
              style={{ alignSelf: "flex-start" }}
              className='bg-dark'
            >
              <Table
                size='sm'
                striped
                bordered
                hover
                variant='dark'
                className=''
                // style={{height:'30vh'}}
              >
                <thead>
                  <tr
                    className=''
                  >
                    <th>Price</th>
                    <th>BTC</th>
                    <th>USDT</th>
                  </tr>
                </thead>
                <tbody
                  className='scrollbar'
                  // style={{ height: "25vh !important" }}
                >
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />

                  <PriceItem />
                  
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                </tbody>
              </Table>
            </div>
            {/* End of Sell Table */}

            {/* Price Explanation */}
            <div
              id='prices-explanation'
              className='d-flex flex-row justify-content-between'
              style={{ alignSelf: "center" }}
            >
              <div className='d-flex flex-column align-items-center'>
                <span>
                  <span className='text-sm-2 text-light'>24h Change: </span>
                  <span className='text-sm-2 text-light'>1%</span>
                </span>
                <span>
                  <span className='text-sm-2 text-warning'>
                    7500 USDT / 1 BTC
                  </span>
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
                  <span className='text-sm-1 text-light'>Last: </span>
                  <span className='text-sm-1  text-success'>7584.81 USDT</span>
                </div>
              </div>
            </div>
            {/* End of Price Explanation */}

            {/* Buy Table */}
            <div
              id='prices-buy'
              style={{ alignSelf: "flex-end" }}
              className='bg-dark d-flex'
            >
              <Table
                size='sm'
                striped
                bordered
                hover
                variant='dark'
                className='mb-0'
              >
                <tbody className='scrollbar' >
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  {/* <PriceItem />
                  <PriceItem />
                  <PriceItem />
                  <PriceItem /> */}
                </tbody>

                <tfoot>
                  <tr>
                    <th>Price</th>
                    <th>BTC</th>
                    <th>USDT</th>
                  </tr>
                </tfoot>
              </Table>
            </div>
            {/* End of Buy Table */}
          </div>

          {/* End of Orders Tab */}
        </Tab>
        <Tab eventKey='depth' title='Depth' className='mr-2'></Tab>
      </Tabs>
    </div> // End of Component
  );
}
