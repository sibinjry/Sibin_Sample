import React from 'react';
import '../assets/css/addpackage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Addpackages = () => {
  return (
    <>

      <div className="main-div">
        <div className="first4-div">
          <div className="contactus">
            Add Packages
          </div>
          <div className="second4-div">

            <form>
              <input type="text" className="form-control" placeholder="Location" /><br></br>
              <input type="text" className="form-control" placeholder="Rupees" /><br></br>
              <input type="file" className="form-control" /><br></br>
              <button className=" btn btn-dark" id="bhjb">Add Package</button>
            </form>

          </div>
        </div>
        <div className="footera">

        </div>

      </div>



    </>
  );

}
export default Addpackages;
