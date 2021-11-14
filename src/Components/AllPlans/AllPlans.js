import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllPlans.css';


const AllPlans = () => {
      const [plans, setPlans] = useState([]);
    useEffect(() =>{
        fetch("https://desolate-reaches-42865.herokuapp.com/AllPlans")
        .then(res => res.json())
        .then (data => setPlans(data))
    } ,[])
    return(
        <div>
            <div className='row'>
                {plans?.map((pd) =>(
                    <div className='col-md-4 card'>
                        <div>
                            <div>
                            <img className='h-50 w-75' src={pd?.image} alt=''/>
                            </div>
                            <h1>{pd?.name}</h1>
        <p><strong>Description:</strong> {pd?.description}</p>
        
        <h4>Price: ${pd?.price}</h4> 
        <Link to={`/Booking/${pd?._id}`}><Button className='btn btn-secondary'>Book Now</Button></Link>

                        </div>
                    </div>
                ))}
            </div>
        
       
    </div>
    );
};

export default AllPlans;