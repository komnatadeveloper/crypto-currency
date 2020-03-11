import React from 'react'
import {
  Row, Col, Tabs, Tab, Form
} from "react-bootstrap";

export const ProfileTab = () => {
  return (
    <div
      id='profile-tab'
      className='bg-warning row'
    >
      {/* Form Section */}
      <div 
        id="form-section-box"
        className='col-6 bg-dark'
      >
        <div
          id='form-section'          
        >
          {/* Email */}
          <div className="d-flex flex-row justify-content-between">
            <span className="text-light">
              E-Mail
            </span>
            <Form.Control
              type="email"
              placeholder="Email"
            />
          </div>
          {/* Phone Number */}
          <div className="d-flex flex-row justify-content-between">
            <span className="text-light">
              Phone Number
            </span>
            <Form.Control
              type="tel"
              placeholder="Phone"
            />
          </div>
          {/* Name */}
          <div className="d-flex flex-row justify-content-between">
            <span className="text-light">
              Name
            </span>
            <Form.Control
              type="text"
              placeholder="Name"
            />
          </div>
          {/* Surname */}
          <div className="d-flex flex-row justify-content-between">
            <span className="text-light">
              Surname
            </span>
            <Form.Control
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      {/* End of Form Section */}
      <div
        id='right-side'
        className='col-6'
      >
        <div
          id='preferences-section'
        >
          Preferences
        </div>
        <div
          id='fees-section'
        >
          Fees
        </div>
        <div
          id='resardis-club-section'
        >
          Club Section
        </div>
      </div>

      
    </div>
  )
}
