import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "name": "Anna", "admNo": 101, "rollNo": 1 },
            { "name": "Anjali", "admNo": 102, "rollNo": 2 },
            { "name": "Theres", "admNo": 103, "rollNo": 3 }
        ]
    )
    return (
        <div>
            <Navbar />
            <center><h1>View All students</h1></center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src="https://www.widener.edu/sites/default/files/2020-11/student%20studying%20in%20lab%201200x750.png" height="300px" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.admNo}</p>
                                                <p class="card-text">{value.rollNo}</p>
                                                <a href="#" class="btn btn-primary">Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}


                        </div>

                    </div>




                </div>
            </div>
        </div>



    )
}

export default ViewAll