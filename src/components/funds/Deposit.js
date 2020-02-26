import React from 'react'
import PropTypes from 'prop-types'
import { Form, Table } from "react-bootstrap";
import DepositHistoryItem from './sub/DepositHistoryItem';


const Deposit = () => {
  return (
    <div
      id='deposit-tab'
      // className='bg-'
      style={{
        backgroundColor:'#777'
      }}
    >
      {/* Deposit Assets */}
      <div
        id='deposit-assets'
        className='bg-dark d-block'
      >
        {/* Deposit Assets Header */}
        <div
          id='deposit-assets-header'
          >
          <span className='header-text text-light'>Deposit Assets</span> 
        </div>
          {/* End of  Deposit Assets Header */}
        
        <div className="row">


          {/* Deposit Assets Left Side */}          
          <div className="col sm-6">

            <Form.Control
               as="select"
              className='bg-dark text-light'
               style={{
                //  color:'blue',
                //  backgroundColor:'orange'
               }}
            >
              <option>Bitcoin - BTC</option>
              <option>Ethereum - ETH</option>
              <option>Basic Attention - BAT</option>
            </Form.Control>

            <div
              id='deposit-info'
              className="d-flex flex-column"
            >
              <div className="d-flex flex-row justify-content-between">
                <span className='text-light'>Total Balance</span>
                <span className='text-light'>1.50000000 BTC</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span className='text-light'>In Order</span>
                <span className='text-light'>0.50000000 BTC</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span className='text-light'>Available Balance</span>
                <span className='text-light'>1.50000000 BTC</span>
              </div>
            </div>

            <div
              id='deposit-explanation'
              className='text-sm-2 text-light'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore illo reprehenderit voluptate, vitae tempore ullam rerum quis, sit eum quam unde vel dolor. Recusandae laboriosam tempore doloremque cumque esse. Ad dolores temporibus ea corporis tenetur vero harum necessitatibus saepe nam natus. Deleniti laudantium beatae magnam voluptas harum ut officiis at sit expedita minima! 
            </div>
          </div>
          {/* End of Deposit Assets Left Side */}

          {/* Deposit Assets Right Side */}
          <div className="col sm-6">
            <p
              id='for-future-exp'
              className='text-light'
            >
              BU ALANA DEPOSIT YAPACAĞI ADRES BAZI BUTONLAR VS GELECEK FAKAT BİZİM SİSTEMİMİZ İÇİN ŞU ANDA BU ALANA NELER GELECEĞİ BELİRSİZ.
            </p>
            <div
              id='for-future-bottom-exp'
              className='text-sm-2  text-light'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore illo reprehenderit voluptate, vitae tempore ullam rerum quis, sit eum quam unde vel dolor. Recusandae laboriosam tempore doloremque cumque esse. Ad dolores temporibus ea corporis tenetur vero harum necessitatibus saepe nam natus. Deleniti laudantium beatae magnam voluptas harum ut officiis at sit expedita minima!
            </div>
          </div>
          {/* End of Deposit Assets Right Side */}
        </div>

      </div>
      {/* End of Deposit Assets */}


{/* -------------------------------------------------------------------------------------------- */}

      <div
        id='deposit-history'
        className='bg-dark d-block'
      >
        {/* Deposit History Header */}
        <div
          id='deposit-history-header'
        >
          <span className='header-text  text-light'>Deposit History</span>
        </div>
        {/* End of  Deposit History Header */}

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
              <th
                className='col-others'
              >Date</th>
              <th className='col-others'>Status</th>
              <th
                className='col-assets'
              >Assets</th>
              <th className='col-others'>Ticker</th>
              <th className='col-others'>Amount</th>
              <th
                className='col-from'
              >From</th>
            </tr>
          </thead>
          <tbody
            className='scrollbar'
          // style={{ height: "25vh !important" }}
          >
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
            <DepositHistoryItem />
          </tbody>

          {/*  */}
        </Table>

        

      </div>

      {/* Deposit History Header */}


      {/* End of Deposit History Header */}





      {/* Deposit History Table */}
      {/* End of Deposit History Table */}
      {/* <Table
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
      </Table> */}
      




    </div>
  )
}

Deposit.propTypes = {

}

export default Deposit


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
