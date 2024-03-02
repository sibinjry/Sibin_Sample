import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { useState, useContext } from "react";
import { AppContext } from "./Context";




export default function Register(){

    const { insertUser } = useContext(AppContext);
    const [newUser, setNewUser] = useState({});
  
    // Storing the Insert User Form Data.
    const addNewUser = (e, field) => {
      setNewUser({
        ...newUser,
        [field]: e.target.value,
      });
    };
  
    // Inserting a new user into the Database.
    const submitUser = (e) => {
      e.preventDefault();
      insertUser(newUser);
      e.target.reset();
    };
    return(
        <>
        <div className='register-form'>
         <Form className="insertForm" onSubmit={submitUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <label htmlFor="_name" className='form-group'>Name</label>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewUser(e, "user_name")}
        placeholder="Enter name"
        className='form-control'
        autoComplete="off"
        required
      /><br></br><br></br>
      <label htmlFor="_email"  className='form-group'>Email</label>
      <input
        type="email"
        id="_email"
        className='form-control'

        onChange={(e) => addNewUser(e, "user_email")}
        placeholder="Enter email"
        autoComplete="off"
        required
      /><br></br><br></br>
  <label htmlFor="_email"  className='form-group'>password</label>
      <input
        type="password"
        id="_password"
        className='form-control'

        onChange={(e) => addNewUser(e, "user_password")}
        placeholder="Enter password"
        autoComplete="off"
        required
      /><br></br><br></br>
             <input type="submit" value="Insert" />
 
     </Form.Group>
    </Form>
    </div>
        </>
    );
}