import React from 'react'
import {
  Row, Col, Tabs, Tab, Form, Table
} from "react-bootstrap";
import { AccountHistoryItem } from './AccountHistoryItem';
// import { ProfileTabForm } from './ProfileTabForm';


export const AccountHistoryTab = () => {
  return (
    <div
      id='account-history-tab'
      // className='row'
      style={{
        backgroundColor: 'grey'
      }}

    >
      <div id="buttons-bar">

        <input
          type='date'
          id='find-a-date'
          style={{}}
        />

        <Form className='form-inline ' id='find-an-action'>
          <Form.Control type='search' placeholder='Find an Action' />
          <span className='fa fa-search text-dark icon-right'></span>
        </Form>
        <Form className='form-inline ' id='find-an-area'>
          <Form.Control type='search' placeholder='Find an Area' />
          <span className='fa fa-search text-dark icon-right'></span>
        </Form>
        <Form className='form-inline ' id='find-a-subject'>
          <Form.Control type='search' placeholder='Find a Subject' />
          <span className='fa fa-search text-dark icon-right'></span>
        </Form>
        <Form className='form-inline ' id='find-an-info'>
          <Form.Control type='search' placeholder='Find an Info' />
          <span className='fa fa-search text-dark icon-right'></span>
        </Form>
        <Form className='form-inline ' id='find-a-status'>
          <Form.Control type='search' placeholder='Find a Status' />
          <span className='fa fa-search text-dark icon-right'></span>
        </Form>


      </div> 
       

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
            <th className={` text-center  col-date`}>Date</th>
            <th className={` text-center  col-action`}>Action</th>
            <th className={` text-center  col-area`}>Area</th>
            <th className={` text-center  col-subject`}>Subject</th>
            <th className={` text-center  col-info`}>Information</th>
            <th className={` text-center  col-status`}>Status</th>
          </tr>
        </thead>
        <tbody
          className='scrollbar'
        // style={{ height: "25vh !important" }}
        >
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
          <AccountHistoryItem />
        </tbody>
      </Table>


    </div>
  )
}
