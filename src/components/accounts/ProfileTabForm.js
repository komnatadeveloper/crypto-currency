import React from 'react'
import {
  Row, Col, Tabs, Tab, Form
} from "react-bootstrap";

export const ProfileTabForm = () => {
  return (
    <div
      id='form-section'
      className='bg-dark w-100 h-100'
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
      {/* Date of Birth */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Date of Birth
            </span>
        <input
          type='date'
          id='date-select'
          style={{}}
        />
      </div>
      {/* Place of Birth */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Place of Birth
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Nationality */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Nationality
            </span>
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
          <option>German</option>
          <option>Turkish</option>
        </Form.Control>
      </div>
      {/* Gender */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Gender
            </span>
        <Form.Control
          as="select"
          className='bg-dark text-light'
          style={{
            //  color:'blue',
            //  backgroundColor:'orange'
          }}
        >
          <option>Select</option>
          <option>Female</option>
          <option>Male</option>
        </Form.Control>
      </div>
      {/* Native Language */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Native Language
            </span>
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
      </div>
      {/* Country */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Native Language
            </span>
        <Form.Control
          as="select"
          className='bg-dark text-light'
          style={{
            //  color:'blue',
            //  backgroundColor:'orange'
          }}
        >
          <option>Select</option>
          <option>England</option>
          <option>Turkey</option>
          <option>Germany</option>
          <option>Russia</option>
        </Form.Control>
      </div>
      {/* State/Region */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          State/Region
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* City */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          City
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Street Line 1 */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Street Line 1
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Street Line 2 */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Street Line 2
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Zip Code */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light">
          Zip Code
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
    </div>
  )
}
