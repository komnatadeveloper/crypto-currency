import React from 'react'
import PropTypes from 'prop-types'
import { Form, Table } from "react-bootstrap";
import TradeHistoryItem from './sub/TradeHistoryItem';


const TradeHistory = () => {
  return (
    <div
      id='trade-history-tab'
      className='bg-dark'
    >
      {/* Search And Checkbox Section */}
      <div
        id='trade-history-tab-bar'
        className='bg-primary'
      >
        <Form
          className="form-inline m-0"
          id="search-assets"
        >
          <span
            className="fa fa-search text-dark icon-right"
          ></span>
          <Form.Control
            type="search"
            placeholder="Search Assets"
          />
          {/* <Form.Control
            type="date"
            // placeholder="Search Assets"
          />

          <Form.Check
            className='text-black'
            id="hide-zero"
            type="checkbox"
            label="Hide 0 Balances"
          ></Form.Check> */}

        </Form>

      </div>
      {/* End of Search And Checkbox Section */}

      {/* Table */}
      <Table
        size='sm'
        striped
        bordered
        // hover
        variant='dark'
        className=''
      // style={{height:'30vh'}}
      >
        <thead>
          <tr
            className=''
          >            
            <th className='text-center'>Date</th>
            <th className='text-center'>Market</th>
            <th className='text-center'>Asset</th>
            <th className='text-center'>Amount</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Action</th>
            <th className='text-center'>Status</th>
            <th className='text-center'>Trade</th>
          </tr>
        </thead>
        <tbody
          className='scrollbar'
        // style={{ height: "25vh !important" }}
        >
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          <TradeHistoryItem />
          {/* <TradeHistoryItem />
          <TradeHistoryItem /> */}

        </tbody>
      </Table>
      {/* End of  Table */}
    </div>
  )
}

TradeHistory.propTypes = {

}

export default TradeHistory
