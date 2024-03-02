import React from 'react';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { useState, useContext } from "react";
import { AppContext } from "./Context";




function Contact()
{

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
     
      <div className="Main-div">
     <div className="first10-div">
     <div className="contactus">
        Contact Us
      </div>
      <div className="second5-div">

     
    <div className="second5-about-content">
      <center><h2>   
    Get In Touch With Us
    </h2></center>
    </div>
    
      </div>
      </div><br></br>
    <br></br>

      {/* form */}
       <div className="form">
      {/* <Container> */}
      <Container fluid>
        <div className="bgimg">
          <Row>
            <Col md={6}>
            <div className="head"><h4>REAL ESTATE MANAGEMENT</h4></div>
           <div className="sec"><h2 >Near Market Junction,<br></br>
           Kulasekharam<br></br>
           ph:9876543210
            </h2></div>
<div className="frame">
{/* <iframe
            title="Unique Title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style="border:0;"

              
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> */}
</div></Col>

<Col md={6}>
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
      <label htmlFor="_password"  className='form-group'>Message</label>
      {/* <input
        type="password"
        // id="_password"
        className='form-control'

        onChange={(e) => addNewUser(e, "user_password")}
        placeholder="Enter password"
        autoComplete="off"
        required
    />*/}
    <textarea
    rows={10}
    cols={80}
    type="message"
    id="_message"
    onChange={(e) => addNewUser(e, "user_message")}
    placeholder="Enter message"
        autoComplete="off"
        required/>
      <br></br><br></br>
      <input type="submit" value="Insert" />

     </Form.Group>
    </Form>
</Col>

{/* <center><div className='but'><Button variant="primary">Shop</Button>
</div></center> */}
</Row>
</div>


</Container>
      {/* </Container> */}
      </div>

      <div className="footer">

</div>

   
     </div> 
     </>
    );
}
export default Contact;