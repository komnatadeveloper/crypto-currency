import React, {useState} from 'react'
import { connect } from "react-redux";
import { OverlayTrigger, Tooltip,  Form, Button } from "react-bootstrap";





import UserBiggerImage from "../../images/registration/account.svg";

const CreateAccountByPasswordPage = ( {


} ) => {

  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  

  return (
    <div id='cr-acc-pwd-page'>
      <div className='page-container'>
        {/* Left Side (Img) */}
        <div className='d-flex flex-row justify-content-center '>
          <img src={UserBiggerImage} alt='' />
        </div>

        {/* Right Side (Form) */}
        <div id='form-section'>
          <h4 className='text-white'>Create Account by Name and Password</h4>
          <p className='text-muted text-sm-1'>
            Please keep your password in a safe place. Don't share it with any
            third-parties or send it online
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
              name='email'
              value={email}
              onChange= { e => {
                setEmail(e.target.value)
              } }
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
                name='password1'
                value={ password1 }
                onChange={e => {
                  setPassword1(e.target.value)
                }}
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
                name='password2'
                value={password2}
                onChange={e => {
                  setPassword2(e.target.value)
                }}
                // placeholder='7584.81 USDT'
                // style={inputStyle}
              />
            </div>
          </div>
          {/* End of Confirm Password */}

          <Button 
            variant='info'
            onClick={ () => {

            }}
          >
              Continue
            </Button>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = state => ({
  // testReducer: state.testReducer
});

export default connect(
  mapStateToProps,
  {
    // some actions here
  }
)(CreateAccountByPasswordPage)