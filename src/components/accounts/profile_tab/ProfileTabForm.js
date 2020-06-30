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
      <p
        className='text-light text-sm-2'
      >
        Alanları doldurmanın zorunlu olmadığına dair bir yazı. Alanları doldurmanın zorunlu olmadığına
        dair bir yazı. Alanları doldurmanın zorunlu olmadığına dair bir yazı. Alanları doldurmanın zorun-
        lu olmadığına dair bir yazı. Alanları doldurmanın zorunlu olmadığına dair bir yazı.
      </p>
      {/* Email */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          E-Mail
            </span>
        <Form.Control
          type="email"
          placeholder="Email"
        />
      </div>
      {/* Phone Number */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          Phone Number
            </span>
        <Form.Control
          type="tel"
          placeholder="Phone"
        />
      </div>
      {/* Name */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          Name
            </span>
        <Form.Control
          type="text"
          placeholder="Name"
        />
      </div>
      {/* Surname */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          Surname
            </span>
        <Form.Control
          type="text"
          placeholder="Email"
        />
      </div>
      {/* Date of Birth */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
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
        <span className="text-light input-label">
          Place of Birth
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Nationality */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          Nationality
            </span>
        <Form.Control
          as="select"
          // className='bg-dark text-light'
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
        <span className="text-light input-label">
          Gender
            </span>
        <Form.Control
          as="select"
          // className='bg-dark text-light'
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
        <span className="text-light input-label">
          Native Language
            </span>
        <Form.Control
          as="select"
          // className='bg-dark text-light'
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
        <span className="text-light input-label">
          Country
            </span>
        <Form.Control
          as="select"
          // className='bg-dark text-light'
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
        <span className="text-light input-label">
          State/Region
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* City */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          City
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Street Line 1 */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          Street Line 1
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Street Line 2 */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
          Street Line 2
            </span>
        <Form.Control
          type="text"
        // placeholder="Email"
        />
      </div>
      {/* Zip Code */}
      <div className="d-flex flex-row justify-content-between">
        <span className="text-light input-label">
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
