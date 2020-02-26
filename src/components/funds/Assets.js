import React from 'react'
import PropTypes from 'prop-types'
import {Form, Table} from "react-bootstrap";
import AssetsItem from './sub/AssetsItem';


const Assets = props => {
  return (
    <div
      id='assets-tab'
      className='bg-dark'
    >
      {/* Search And Checkbox Section */}
      <div 
        id='assets-tab-bar'
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

          <Form.Check 
            className='text-black'
            id="hide-zero" 
            type="checkbox" 
            label="Hide 0 Balances"
          ></Form.Check>

        </Form>

      </div>
      {/* End of Search And Checkbox Section */}

      {/* Table */}
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
            <th></th>
            <th>Assets</th>
            <th>Ticker</th>
            <th>Balance</th>
            <th>In Order</th>
            <th>24h Change</th>
            <th>USDT</th>
            <th>BTC</th>
            <th>ETH</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody
          className='scrollbar'
        // style={{ height: "25vh !important" }}
        >
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />
          <AssetsItem />

        </tbody>
      </Table>
      {/* End of  Table */}


      
      
    </div>
  )
}

Assets.propTypes = {

}

export default Assets


// import React from 'react'
// import PropTypes from 'prop-types'
// import {Form} from "react-bootstrap";
// const Assets = props => {
//   return (
//     <div
//       id='assets-tab'
//       className='bg-danger'
//     >
//       {/* Search And Checkbox Section */}
//       <div 
//         id='assets-tab-bar'
//         className='bg-primary'
//       >
//         <Form
//           className="form-inline m-1"
//           id="search-assets"
//         >
//           <span
//             className="fa fa-search text-dark icon-right"
//           ></span>
//           <Form.Control
//             type="search"
//             placeholder="Search Assets"
//           />

//         </Form>

//       </div>
//       {/* End of Search And Checkbox Section */}
//       <p>Assets Tab</p>
//     </div>
//   )
// }

// Assets.propTypes = {

// }

// export default Assets
