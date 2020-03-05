import React from 'react'
import { OverlayTrigger, Tooltip,  Form, Button } from "react-bootstrap";

import UserBiggerImage from "../../images/registration/account.svg";

export const CreateAccountByPasswordPage = () => {
  return (
    <div id='cr-acc-pwd-page'>
      <div className="page-container">

        {/* Left Side (Img) */}
        <div className='d-flex flex-row justify-content-center '>
          <img
             src={UserBiggerImage} alt='' 
            />
        </div>

        {/* Right Side (Form) */}
        <div
          id='form-section'
        >
          <h4
            className='text-white'
          >
            Create Account by Name and Password
          </h4>
          <p
            className='text-muted'
          >
            Please keep your password in a safe place. Don't share it with any
            third-parties or send it online
          </p>

          {/* Account Name & ToolTip */}
          <div className="form-row">
            <div className="d-block">            
              <span className='ml-1 text-light label-with-tooltip'>Account Name</span>
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
          <div className="form-row">
            <div className="d-block">
              <span className='ml-1 text-light label-with-tooltip'>Password</span>
              
              <Form.Control
                type='password'
                // placeholder='7584.81 USDT'
                // style={inputStyle}
              />
            </div>
          </div>
          {/* End of Password */}

          {/* Confirm Password */}
          <div className="form-row">
            <div className="d-block">
              <span className='ml-1 text-light label-with-tooltip'>Confirm Password</span>
              
              <Form.Control
                type='password'
                // placeholder='7584.81 USDT'
                // style={inputStyle}
              />
            </div>
          </div>
          {/* End of Confirm Password */}

          <Button
            variant='info'
          >Continue</Button>
        </div>
      </div>
    </div>
  );
}
