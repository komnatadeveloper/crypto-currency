import React from 'react'
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

import UsbImage from '../../images/registration/flesh-active.svg'
import UserImage from "../../images/registration/account-inactive.svg";

const CreateAccount = ({
  history
}) => {
  return (
    <div id='create-account-page'>
      <h1 className='text-light'>Registration</h1>
      <div className='selections'>
        {/* Left Side */}
        <div className=' ' id='wallet-model'>
          <div
            className='selection-box'
            style={{
              backgroundColor: "#222"
            }}
          >
            <img className='' src={UsbImage} alt='' />
            <div className='relative-container'>
              <div className='header-section'>
                <h4 className='text-white text-center mt-2 p-0 mb-0'>
                  By bin-file
                </h4>

                {/* Tooltip Line */}
                <div className='d-flex flex-row justify-content-center'>
                  <span className='text-light'>Wallet Model</span>
                  <span>
                    <OverlayTrigger
                      key='top'
                      placement='top'
                      overlay={<Tooltip id={`wallet-tooltip`}>Wallet</Tooltip>}
                    >
                      <i className='far fa-question-circle ml-2 text-light'></i>
                    </OverlayTrigger>
                  </span>
                </div>

                {/* Recommended Text */}
                <div className='d-flex flex-row justify-content-center mt-2 mb-2'>
                  <span className='bg-colored-text bg-success text-sm-1'>
                    recommended
                  </span>
                </div>
              </div>

              <p className=' font-weight-bold text-muted d-block text-center m-0 p-0'>
                Security
              </p>
              {/* High Text */}
              <div className='d-flex flex-row justify-content-center'>
                <p
                  className=' font-weight-bold text-success d-inline-block text-center b-bottom-underlined'
                  style={{
                    borderColor: "#555"
                  }}
                >
                  High
                </p>
              </div>
              {/* End of High Text */}
              <p className=' font-weight-bold text-muted d-block text-center m-0 p-0'>
                Login by
              </p>
              {/* Bin-file+Password Text */}
              <div className='d-flex flex-row justify-content-center'>
                <p
                  className=' font-weight-bold text-success d-inline-block text-center b-bottom-underlined'
                  style={{
                    borderColor: "#555"
                  }}
                >
                  Bin-file + Password
                </p>
              </div>
              {/* End of Bin-file+Password Text */}
              <p className=' font-weight-bold text-muted d-block text-center m-0 p-0'>
                Back up and restore account
              </p>
              <p className=' font-weight-bold text-success d-block text-center m-0 p-0'>
                Yes
              </p>
            </div>
            {/* End of Relative Container */}
            <div className='d-flex flex-row justify-content-center'>
              <Button 
                variant='info'
                onClick={() => {
                  // history.push('/test')
                }}
              >
                Continue
              </Button>
            </div>
          </div>
          {/* End of Selection Box */}
        </div>

        {/* Right  Side */}
        <div className=' ' id='account-model'>
          <div className='selection-box '
            style={{
              backgroundColor:'#223'
            }}
          >
            <img src={UserImage} alt='' />
            <div className='relative-container'>
              {/* Header Section */}
              <div className='header-section'>
                <h4 className='text-white text-center mt-2 p-0 mb-0'>
                  By Account Name and Password
                </h4>

                {/* Tooltip Line */}
                <div className='d-flex flex-row justify-content-center'>
                  <span className='text-light'>Account Model</span>
                  <span>
                    <OverlayTrigger
                      key='top'
                      placement='top'
                      overlay={<Tooltip id={`wallet-tooltip`}>
                        The account model lets you login to your wallet from anywehere using pnşy your account name and password, but your password is vulnerable to brute-force attacks which means it is important to use a very long password, ideally 20+ characters!
                      </Tooltip>}
                    >
                      <i className='far fa-question-circle ml-2 text-light'></i>
                    </OverlayTrigger>
                  </span>
                </div>
              </div>
              {/* End of Header Section */}

              <p className=' font-weight-bold text-muted d-block text-center m-0 p-0'>
                Security
              </p>
              {/* High Text */}
              <div className='d-flex flex-row justify-content-center'>
                <p
                  className=' font-weight-bold text-warning d-inline-block text-center b-bottom-underlined'
                  style={{
                    borderColor: "#555"
                  }}
                >
                  Medium
                </p>
              </div>
              {/* End of High Text */}
              <p className=' font-weight-bold text-muted d-block text-center m-0 p-0'>
                Login by
              </p>
              {/* Bin-file+Password Text */}
              <div className='d-flex flex-row justify-content-center'>
                <p
                  className=' font-weight-bold text-danger d-inline-block text-center b-bottom-underlined'
                  style={{
                    borderColor: "#555"
                  }}
                >
                  Account name + Password
                </p>
              </div>
              {/* End of Bin-file+Password Text */}
              <p className=' font-weight-bold text-muted d-block text-center m-0 p-0'>
                Back up and restore account
              </p>
              <p className=' font-weight-bold text-danger d-block text-center m-0 p-0'>
                No
              </p>
            </div>
            {/* End of Relative Container */}
            <div className='d-flex flex-row justify-content-center'>
              <Button variant='info'>Continue</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export  default CreateAccount
