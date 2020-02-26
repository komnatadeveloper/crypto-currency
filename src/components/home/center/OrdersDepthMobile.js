import React, { useState, useEffect } from "react";
import { Tabs, Tab, Table, Row } from "react-bootstrap";
import { PriceItem } from "../left_side/prices/sub/PriceItem";

export const OrdersDepthMobile = () => {
  const [tab, setTab] = useState("orders-mobile"); // "orders-mobile" OR "depth-mobile"

  useEffect(() => {
    setTab("orders-mobile");
    // console.log('Prices, ', Date.now())
  }, []);

  return (
    <Row 
      id='orders-depth-mobile'
      className='d-flex flex-column d-block mx-0'
      style={{
        backgroundColor:'#222'
      }}
    >
      {/* Tabs */}
      <Tabs
        id='order-depth-mobile-tab'
        activeKey={tab}
        onSelect={k => {
          setTab(k);
          console.log(tab);
        }}
      >
        <Tab
          eventKey='orders-mobile'
          title='Orders'
          className='mr-2'
          style={{
            borderTopLeftRadius: "10px"
          }}
        >
          {/* Orders Tab */}
          <div className='m-0 p-0 d-dlex flex-column' id='orders-mobile-tab'>
            {/* Sell Table */}
            <div
              id='mobile-prices-sell'
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
                  <tr className=''>
                    <th className=' pr-3'>Price</th>
                    <th className=' pr-3'>BTC</th>
                    <th className=' pr-3'>USDT</th>
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
              id='mobile-prices-buy'
              style={{ alignSelf: "flex-end" }}
              className='bg-dark d-flex'
            >
              <Table
                size='sm'
                striped
                // bordered
                hover
                variant='dark'
                className='mb-0'
              >
                <tbody className='scrollbar'>
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
                    <th className=''>Price</th>
                    <th className=''>BTC</th>
                    <th className=''>USDT</th>
                  </tr>
                </tfoot>
              </Table>
            </div>
            {/* End of Buy Table */}
          </div>

          {/* End of Orders Tab */}
        </Tab>
        <Tab eventKey='depth-mobile' title='Depth' className='mr-2'></Tab>
      </Tabs>
    </Row> // End of Component
  );
};
