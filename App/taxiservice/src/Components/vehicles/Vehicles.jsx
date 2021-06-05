import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Vehicles = () => {
    
    const [vehicles, setVehicles] = useState([{
        code: '',
        model: '',
        name: ''
    }])

    useEffect(() => {
        fetch("http://localhost:5000/vehicleR/getVehicles").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setVehicles(jsonRes));
    })

    return (
        <div className="container">
            <br></br>
            <button><Link to="/addVehicles">Add Vehicle</Link></button>
            <br></br><br></br>
            <h2>Vehicle List</h2>
            <br></br>
            <br></br>   
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Vehicle Name</th>
                        <th scope="col">Vehicle Model</th>
                        <th scope="col">Vehicle Code</th>
                    </tr>
                </thead>
                {vehicles.map(vehicle =>            
                <tbody>
                    <tr>
                        <td>{vehicle.name}</td>
                        <td>{vehicle.model}</td>
                        <td>{vehicle.code}</td>
                    </tr>
                </tbody>
                )}
            </table>
                    {/* <h3>{vehicle.name}</h3>
                    <h2>{vehicle.model}</h2>
                    <h2>{vehicle.code}</h2> */}
        </div>
        
    )
}

export default Vehicles
