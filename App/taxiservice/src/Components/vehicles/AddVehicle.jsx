import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddVehicle = () => {

    const[input, setInput] = useState({
        code: '',
        model: '',
        type: '',
        name: '',
        categories: '',
        hire_fee: ''
    })

    const handleChange =(event) =>{
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleClick =(event) =>{
        event.preventDefault();
        const newVehicle = {
            code: input.code,
            model: input.model,
            type: input.type,
            name: input.name,
            categories: input.categories,
            hire_fee: input.hire_fee
        }
        
        axios.post('http://localhost:5000/vehicleR/vehicle', newVehicle)
        console.log(newVehicle)
    }
    
    return (
        <div className="container">
            <form>
                <div class="form-group">
                    <label for="InputVehicleCode">Vehicle Code</label>
                    <input onChange={handleChange} name="code" value={input.code} type="text" class="form-control" id="InputVehicleCode" placeholder="Enter Vehicle Code"></input>
                </div>
                <div class="form-group">
                    <label for="InputVehicleModel">Vehicle Model</label>
                    <input onChange={handleChange} name="model" value={input.model} type="text" class="form-control" id="InputVehicleModel" placeholder="Vehicle Model"></input>
                </div>
                <div class="form-group">
                    <label for="InputVehicleType">Vehicle Type</label>
                    <input onChange={handleChange} name="type" value={input.type} type="text" class="form-control" id="InputVehicleType" placeholder="Vehicle Type"></input>
                </div>
                <div class="form-group">
                    <label for="InputVehicleName">Vehicle Name</label>
                    <input onChange={handleChange} name="name" value={input.name} type="text" class="form-control" id="InputVehicleName" placeholder="Vehicle Name"></input>
                </div>
                <div class="form-group">
                    <label for="InputVehicleCategory">Vehicle Category</label>
                    <input onChange={handleChange} name="categories" value={input.categories} type="text" class="form-control" id="InputVehicleCategory" placeholder="Vehicle Category"></input>
                </div>
                <div class="form-group">
                    <label for="InputVehicleFee">Vehicle Hire Fee</label>
                    <input onChange={handleChange} name="hire_fee" value={input.hire_fee} type="text" class="form-control" id="InputVehicleFee" placeholder="Vehicle Category"></input>
                </div>
                <br></br>
                <button onClick={handleClick} type="submit" class="btn btn-primary">Add Vehicle</button>
            </form>
        </div>
    )
}

export default AddVehicle
