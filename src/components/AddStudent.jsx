import React from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
  return (
    <div>
        <Navbar/>
        <center><h1>Registration</h1></center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">

            
                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">name:</label>
                        <input type="text" className="form-control" />
                  
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  
                      <label htmlFor="" className="form-label">Admn.no:</label>
                      <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     <label htmlFor="" className="form-label">Roll.no:</label>
                     <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                              <label htmlFor="" className="form-label">Parent name:</label>
                              <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">College:</label>
                        <textarea name="" id="" className="form-control"></textarea>
                              
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">dob:</label>
                    <input type="date" className="form-control" />

                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">email:</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   
                    <label htmlFor="" className="form-label">Password:</label>
                    <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                    <label htmlFor="" className="form-label">Confirm Password:</label>
                    <input type="text" className="form-control" />

                    </div>
                    

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent