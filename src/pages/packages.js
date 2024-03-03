import React from "react";
import '../assets/css/packages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Packages(){
    return(
        <>
        <div className="Main-div">

        <div className="first3-div">
      <div className="Aboutus">
        Packages
      </div>

     </div>

      <div className="second-main"></div>
  
    <div className="second3-about-content">
      <center><h2>   
    The Best Way To Buy Real Estate
    </h2></center>
    </div>
    <div className=" second-about-contents">
      <center>
      No matter if they’re purchasing, renting, renovating, or something else, real estate plays a huge role in a person’s life. For those fortunate enough to have a stable place to call home, it represents safety and familiarity: a place to create memories
      </center>
    </div>
    <div className="second-about-contentes">
      <center><h2>   
    Property
    </h2></center>
    </div>
    <div className=" second-about-contentses">
      <center>
        <u>Available For Rent</u>
      </center>
    </div>

    {/* packages */}
    <div className="package">

      <Container>
        <Row className="row-one">
          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package1.jpg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                10,00,000- <FaRupeeSign/>20,00,000<br></br>Location:Delhi

                </div>
              </center>
            </div>
          </Col>

          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package2.jpg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                10,00,000- <FaRupeeSign/>15,00,000<br></br>Location:Chennai
                </div>
              </center>
            </div>
          </Col>

          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package3.jpg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                15,00,000- <FaRupeeSign/>25,00,000<br></br>Location:Netta
                </div>
              </center>
            </div>
          </Col>
        </Row>

        <Row className="row-two">
          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package4.jpg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                10,00,000- <FaRupeeSign/>16,00,000<br></br>Location:Mysore
                </div>
              </center>
              
            </div>
          </Col>

          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package5.jpg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                16,00,000- <FaRupeeSign/>30,00,000<br></br>Location:Bangalore
                </div>
              </center>
            </div>
          </Col>

          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package6.jpg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                14,00,000- <FaRupeeSign/>36,00,000<br></br>Location:Kochi
                </div>
              </center>
            </div>
          </Col>
        </Row>

        <Row className="row-three">
          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package7.jpg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                8,00,000- <FaRupeeSign/>24,00,000<br></br>Location:Ooty
                </div>
              </center>
              
            </div>
          </Col>

          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package8.jpeg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                16,00,000- <FaRupeeSign/>44,00,000<br></br>Location:Thirissur
                </div>
              </center>
            </div>
          </Col>

          <Col md={4} className="column">
            <div className="package-details">
              <img src={process.env.PUBLIC_URL+"/package9.jpeg"}alt="" width="300px" height="300px"/>
              <center>
                <div className="rupees">
                <FaRupeeSign/>
                30,00,000- <FaRupeeSign/>66,00,000<br></br>Location:Kanya kumari
                </div>
              </center>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="footer">
      
    </div>
        </div>

        </>
    );
}
export default Packages;