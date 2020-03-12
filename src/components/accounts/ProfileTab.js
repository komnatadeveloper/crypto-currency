import React from 'react'
import {
  Row, Col, Tabs, Tab, Form
} from "react-bootstrap";
import { ProfileTabForm } from './ProfileTabForm';


export const ProfileTab = () => {
  return (
    <div
      id='profile-tab'
      className='bg-warning row'
    >
      {/* Form Section */}
      <div 
        id="form-section-box"
        className='col-6'
      >
        <ProfileTabForm />
      </div>

      {/* End of Form Section */}
      <div
        id='right-side'
        className='col-6 bg-primary'

      >
        <div
          id='preferences-section'
          className='bg-danger'
        >
          <div className='title-row'>
            <span className="section-title bg-success">
              Preferences
            </span>
          </div>
          {/* Language Row */}
          <div className="section-row d-flex flex-row justify-content-between">
            <span className="section-label">
              Language
            </span>
            <span className="section-action">
              <Form.Control
                as="select"
                className='bg-dark text-light'
                style={{
                  //  color:'blue',
                  //  backgroundColor:'orange'
                }}
              >
                <option>Select</option>
                <option>English</option>
                <option>Turkish</option>
                <option>German</option>
                <option>Russian</option>
              </Form.Control>
            </span>
          </div>
          {/* Dark Mode Row */}
          <div className="section-row d-flex flex-row justify-content-between">
            <span className="section-label">
              Dark Mode
            </span>
            <span className="section-action">
              <Form.Check
                type="switch"
                id="dark-mode-sw"
                label="" // Don't delete label, otherwise switch is hidden!
              />
            </span>
          </div>
          {/* Developer Interface Row */}
          <div className="section-row d-flex flex-row justify-content-between">
            <span className="section-label">
              Developer Interface
            </span>
            <span className="section-action">
              <Form.Check
                type="switch"
                id="dev-int-sw"
                label="" // Don't delete label, otherwise switch is hidden!
              />
            </span>
          </div>
        </div>
        <div
          id='fees-section'
          className='bg-danger'
        >
          <div className='title-row'>
            <span className="section-title bg-success">
              Fees
            </span>
          </div>

          {/* Pay with Resardis Coin Row */}
          <div className="section-row d-flex flex-row justify-content-between">
            <span className="section-label">
              Pay with Resardis Coin
            </span>
            <span className="section-action">
              <Form.Check
                type="switch"
                id="dev-int-sw"
                label="" // Don't delete label, otherwise switch is hidden!
              />
            </span>
          </div>
          {/* Maker Fee Row */}
          <div className="section-row d-flex flex-row justify-content-between">
            <span className="section-label">
              Maker Fee
            </span>
            <span className="section-action">
              0.010 %
            </span>
          </div>
          {/* Taker Fee Row */}
          <div className="section-row d-flex flex-row justify-content-between">
            <span className="section-label">
              Taker Fee
            </span>
            <span className="section-action">
              0.015 %
            </span>
          </div>
          
        </div>
        <div
          id='resardis-club-section'
          className='bg-danger'
        >
          <div className='title-row'>
            <span className="section-title bg-success">
              Club Section
            </span>
          </div>
          <p>
            Bu alana kullanıcının gerçekleştirebileceği görevler gelecek.
            Bu görevler sonrasında kripto para kazanabilecek. Bu alan
            ayrı bir tab da olabilir. İçeriği henüz hazır değil. Bu alana kullanıcının gerçekleştirebileceği görevler gelecek. Bu görevler
            sonrasında kripto para kazanabilecek. Bu alan ayrı bir tab da
            olabilir. İçeriği henüz hazır değil.
          </p>
        </div>
      </div>

      
    </div>
  )
}
