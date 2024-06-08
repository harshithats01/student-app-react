import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [data,setData]=useState(
        {
            "name":" ",
            "admno":" ",
            "age":" ",
            "email":" "
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =() => {
        console.log(data)
    }
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
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                  
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  
                      <label htmlFor="" className="form-label">Admn.no:</label>
                      <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputHandler}/>

                    </div>
                   
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  
                  <label htmlFor="" className="form-label">Age:</label>
                  <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler}/>

                </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">email:</label>
                    <input type="text" className="form-control" name='email' value={data.email}  onChange={inputHandler}/>

                    </div>
                    
                    

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValue}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent