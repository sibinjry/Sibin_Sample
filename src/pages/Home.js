import React from "react";
import '../assets/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container ,Row,Col} from 'react-bootstrap';

function Home(){
    return(
        <>

        {/* full part */}
         <div className="Main-div">
          

          <div className="first1-div">
            <p className="first-Par">Better living</p>

            <p className="second-Par">Progressive space for responsible living</p>
            {/* <Button color="primary" className="btn">Read More</Button> */}
          </div>

         </div>
         {/* secondpart */}
         <div className="Second-Div">
          <Container>
            <Row>
              <Col className="first-col">
                <div className="About">
                  About us
                </div>
                <div className=" second1-about">
                <h2>Recent Deals Closed By Some Of Our Sellers</h2>
                </div>
                <div className="third1-about">
                We likewise have an extraordinary aptitude for working with complex networks with huge spending plans and offering various enhancements to their occupants. Likewise, we oversee business affiliations and blended-use advancements, just as multi-family and financial specialists claimed rental and REO properties for institutional and private value customers.
                 </div>
              
              </Col>
              <Col>
                 <img  className="imageeee"src={process.env.PUBLIC_URL+"/home.jpg"} alt="" width="600px" height="400px"/>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>

              <Col md={4}>
              <div className="About">
              WHAT WE DO                </div>
                <div className=" second1-about">
                <h2>What We Offer For You</h2>  
                </div>
                <div className="third1-about">
                Estate Management includes a broad category of commercial property such as offices, hotels, shops, or it can refer to the management of a residential property.                 </div>
              </Col >

              <Col md={4} className="column-img">
              <img  className="image"src={process.env.PUBLIC_URL+"/images.jpeg"} alt="" width="100px" height="300px"/>
              <div className="sale">
                <center>Flat for sale</center>
              </div>
              </Col>

              <Col md={4} className="column-img">
              <img  className="image"src={process.env.PUBLIC_URL+"/pexels-photo-106399.jpeg"} alt="" width="400px" height="300px"/>
              <div className="sale">
              <center>Home for sale</center>
              </div>
              </Col>

            </Row>
          </Container>
         </div>
         {/* footer */}
         <div className="footer">
          <center>choose your best to life happy</center>
         </div>
        </>
    );
}
export default Home;