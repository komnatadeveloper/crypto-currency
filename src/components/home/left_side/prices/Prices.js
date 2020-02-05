import React, {useState} from 'react'
import { Tabs, Tab } from "react-bootstrap";

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
            borderTopLeftRadius:'10px'
          }}
        ></Tab>
        <Tab eventKey='depth' title='Depth' className='mr-2'></Tab>
      </Tabs>
    </div>
  );
}
