import React, { useState } from 'react'
import Helmet from "react-helmet";
import {
  Row, Col, Tabs, Tab, Form
} from "react-bootstrap";
import { ProfileTab } from './ProfileTab';


export const AccountsPage = () => {

  const [tab, setTab] = useState('profile'); // "security" OR "accountHistory"


  return (
    <div
      id='accounts-page'
    >
    <Helmet>
      <title>Accounts</title>
    </Helmet>
      {/* Tabs */}
      <Tabs
        id='accounts-page-tabs'
        activeKey={tab}
        onSelect={k => {
          setTab(k);
          console.log(tab);
        }}
      >
        <Tab
          eventKey='profile'
          title='Profile'
          className='mr-2'
          style={{
            borderTopLeftRadius: "10px"
          }}
        >
          <ProfileTab />
        </Tab>

        <Tab eventKey='security' title='Security' className='mr-2'>
          <p className='text-white'>Security Tab</p>
        </Tab>

        <Tab eventKey='accountHistory' title='Account History' className='mr-2'>
          <p className='text-white'>Account History Tab</p>
        </Tab>

      </Tabs>
      {/* End of Tabs */}
    </div>
  )
}
