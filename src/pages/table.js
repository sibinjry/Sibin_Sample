import React from"react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Row,Col,Container} from "react-bootstrap";
 import '../assets/css/osoffers.css';
import { useContext, useState } from "react";
import { AppContext } from "./Context";
import Table from 'react-bootstrap/Table';

function View(){

  const {
    users,
    userLength,
    editMode,
    cancelEdit,
    updateUser,
    deleteUser,
  } = useContext(AppContext);

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateUser(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (id, user_name, user_email,user_password) => {
    setNewData({ id, user_name, user_email,user_password });
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };
    return !userLength ? (
      <p>{userLength === null ? "Loading..." : "Please insert some users."}</p>
  ) : (
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
<div className="table">
<Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
          <th>Action</th>
          
          
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, user_name, user_email,user_password, isEditing }) => {
          return isEditing === true ? (
            <tr key={id}>
              <td>
                <input
                  type="text"
                  defaultValue={user_name}
                  onChange={(e) => updateNewData(e, "user_name")}
                />
              </td>
              <td>
                <input
                  type="email"
                  defaultValue={user_email}
                  onChange={(e) => updateNewData(e, "user_email")}
                />
              </td>
              <td>
                <input
                  type="email"
                  defaultValue={user_password}
                  onChange={(e) => updateNewData(e, "user_password")}
                />
              </td>
              <td>
                <button className="btn btn-success" onClick={() => saveBtn()}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => cancelEdit(id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={id}>
              <td>{user_name}</td>
              <td>{user_email}</td>
              <td>{user_password}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => enableEdit(id, user_name, user_email,user_password)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteConfirm(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
</div>
</Col>


</Row>
<center><div className='but'><Button variant="primary">Shop</Button>
</div></center>
</div>
</Container>

    );
}
export default View;