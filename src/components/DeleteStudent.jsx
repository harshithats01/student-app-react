import React from 'react'
import Navbar from './Navbar'

const DeleteStudent = () => {
  return (
    <div>
        <Navbar/>
        <center><h1>Delete</h1></center>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                     <label htmlFor="" className="form-label">Admn No::</label>
                     <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteStudent