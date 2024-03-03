import React from"react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,Col,Container} from "react-bootstrap";
// import './osofferscss.css';
function Osoffers(){
    return(
      <Container fluid>
        <div className="bgimg">
          <Row>
            <Col md={6}>
            <div className="head"><h1>ONLINE SHOPPING</h1></div>
           <div className="sec"><h2>LIMITED TIME ONLY</h2></div>
<div className="tir"><p>Enchante! If you want to use auto-generated fashion that will actually make people love your products even more.All new brands are available in our website.As a whole it can update as our trending time.
Developement of all acessories and all the items are as made for You guyss..</p>
</div></Col>

<Col md={6}>
<div className="table"><table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        
            <tr>
              <td>
                <input
                  type="text"
                
                
                />
              </td>
              <td>
                <input
                  type="email"cccc
                  
                  
                />
              </td>
              <td>
                <Button className="aa" variant="secondary">
                  Save
                </Button>
                <Button
                  className="bb" variant="danger"
                  
                >
                  Cancel
                </Button>
              </td>
            </tr>
          
            <tr>
              <td></td>
              <td></td>
              <td>
                <Button
                  className="cc" variant="secondary"
                  
                >
                  Edit
                </Button>
                <Button 
                  className="dd" variant="danger"
                
                >
                  Delete
                </Button>
              </td>
            </tr>
          
        
      </tbody>
    </table>
    
</div>
</Col>

<center><div className='but'><Button variant="primary">Shop</Button>
</div></center>
</Row>
</div>
</Container>

    );
}
export default Osoffers;