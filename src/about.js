import React from "react";
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
// import { Container, Nav, Navbar, Form,Button } from 'react-bootstrap';
// import { useState, useContext } from "react";
// import { AppContext } from "./Context";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About(){
  // const { insertUser } = useContext(AppContext);
  // const [newUser, setNewUser] = useState({});

  // // Storing the Insert User Form Data.
  // const addNewUser = (e, field) => {
  //   setNewUser({
  //     ...newUser,
  //     [field]: e.target.value,
  //   });
  // };

  // // Inserting a new user into the Database.
  // const submitUser = (e) => {
  //   e.preventDefault();
  //   insertUser(newUser);
  //   e.target.reset();
  // };

    return(
        <>
        
    {/* <form className="insertForm" onSubmit={submitUser}>
      <h2>Insert User</h2>
      <label htmlFor="_name">Name</label>
      <input
        type="text"
        id="_name"
        onChange={(e) => addNewUser(e, "user_name")}
        placeholder="Enter name"
        autoComplete="off"
        required
      />
      <label htmlFor="_email">Email</label>
      <input
        type="email"
        id="_email"
        onChange={(e) => addNewUser(e, "user_email")}
        placeholder="Enter email"
        autoComplete="off"
        required
      />
      <input type="submit" value="Insert" />
    </form> */}

     <div className="first2-div">
      <div className="Aboutus">
        About us
      </div>

     </div>

      <div className="second-main"></div>
    {/* <div className="second2-about">
      <center>
        ABOUT US
      </center>
    </div> */}
    <div className="second2-about-content">
      <center><h2>   
    Everyone Deserves The Opportunity Of Home
    </h2></center>
    </div>
    <div className=" second-about-contents">
      <center>
      Our Real Estate Management helps the People To decide there own home wht is good for them with low budget.
      </center>
    </div>

    <div className="image-content">
      <Container>
        <Row>
          <Col md={6}>
            <img src={process.env.PUBLIC_URL+"/images.jpeg"} alt="" width="500px" height="200px"/>
          </Col>

          <Col md={6}>
            <img src={process.env.PUBLIC_URL+"/abouthome.jpeg"} alt="" width="500px" height="200px"/>
          </Col>
        </Row>
      </Container>
    </div>

    {/* why choose us */}
    <div className="choose-us">
      <Container>
        <Row>
          <Col md={4}>
            <div className="Choose">
              WHY CHOOSE US
            </div>
                
            <div className="experience ">
              We have best experience in it
            </div>
          </Col>
          <Col md={4} className="we-are">
          We are convinced that delivering a completely satisfying home selling and buying 
          experience requires proactiveness and an ability to maintain solid communications
           throughout the transaction process.
          </Col>
          <Col md={4} className="we-are">
          It is our commitment to provide you with exceptional service from a team of highly skilled, 
  uniquely talented individuals with high integrity, extensive professional knowledge and experience. 

          </Col>
        </Row>
      </Container>
    </div>
    {/* agent */}
    <div className="agent">
    <div className="agent-about">
      <center>
        OUR TEAM
      </center>
    </div>
    <div className="agent-about-content">
      <center><h2>   
    OUR AGENT
    </h2></center>
    </div>
     
     <Container className="image-sec">
      <Row>
        <Col md={4}>
        <img src={process.env.PUBLIC_URL+"/smithjpeg.jpeg"} alt="" width="300px" height="250px"/>
         <center><div className="Name">Smith</div>
         <h6 className="Name">AGENT</h6></center>
        </Col>
        <Col md={4}>
        <img src={process.env.PUBLIC_URL+"/download.jpeg"} alt="" width="300px" height="250px"/>
        <center><div className="Name">Chris</div>
        <h6 className="Name">AGENT</h6></center>

        </Col>
        <Col md={4}>
        <img src={process.env.PUBLIC_URL+"/max.jpeg"} alt="" width="300px" height="250px"/>
        <center><div className="Name">Max</div>
        <h6 className="Name">AGENT</h6></center>

        </Col>
      </Row>
     </Container>
    </div>
    <div className="footer">

    </div>
        </>
    );
}
export default About;