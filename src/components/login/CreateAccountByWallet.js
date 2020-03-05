import React from 'react'
import { OverlayTrigger, Tooltip, Form, Button } from "react-bootstrap";

import FlashBiggerImage from "../../images/registration/flesh-drive.svg";

export const CreateAccountByWallet = () => {
  return (
    <div id='cr-acc-wallet-page'>
      <div className='page-container'>
        {/* Left Side (Img) */}
        <div className='d-flex flex-row justify-content-center '>
          <img src={FlashBiggerImage} alt='' />
        </div>

        {/* Right Side (Form) */}
        <div id='form-section'>
          <h4 className='text-white'>Create Account by Bin-file</h4>
          <p className='text-muted text-sm-1'>
            A bin-file will be automatically created. Please download it and
            keep in a safe place. You’ll need to upload this file to login to
            your account in the future.
          </p>

          {/* Account Name & ToolTip */}
          <div className='form-row'>
            <div className='d-block'>
              <span className='ml-1 text-light label-with-tooltip'>
                Account Name
              </span>
              <span>
                <OverlayTrigger
                  key='top'
                  placement='top'
                  overlay={
                    <Tooltip id={`account-name-tooltip`}>
                      Account name must contain from 4 to 63 characters and must
                      consist of latin letter, digits.
                    </Tooltip>
                  }
                >
                  <i className='far fa-question-circle ml-2 text-light'></i>
                </OverlayTrigger>
              </span>
            </div>

            <Form.Control
              type='text'
              // placeholder='7584.81 USDT'
              // style={inputStyle}
            />
          </div>
          {/* End of Account Name & ToolTip */}

          {/* Password */}
          <div className='form-row'>
            <div className='d-block'>
              <span className='ml-1 text-light label-with-tooltip'>
                Password
              </span>

              <Form.Control
                type='password'
                // placeholder='7584.81 USDT'
                // style={inputStyle}
              />
            </div>
          </div>
          {/* End of Password */}

          {/* Confirm Password */}
          <div className='form-row'>
            <div className='d-block'>
              <span className='ml-1 text-light label-with-tooltip'>
                Confirm Password
              </span>

              <Form.Control
                type='password'
                // placeholder='7584.81 USDT'
                // style={inputStyle}
              />
            </div>
          </div>
          {/* End of Confirm Password */}

          <Button variant='info'>Continue</Button>
        </div>
      </div>
    </div>
  );
}
