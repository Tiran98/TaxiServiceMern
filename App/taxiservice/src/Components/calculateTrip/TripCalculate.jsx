import React, { useEffect, useState } from 'react';
import { Dropdown, MenuItem, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'


const TripCalculate = () => {

    const [vehicles, setVehicles] = useState([{
        model: '',
        name: ''
    }])
    const [categories, setCategories] = useState([{
        category_name: '',
    }])

    useEffect(() => {
        fetch("http://localhost:5000/vehicleR/getVehicles").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setVehicles(jsonRes));
    })
    useEffect(() => {
        fetch("http://localhost:5000/categoryR/getCategory").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setCategories(jsonRes));
    })


    return (
        <div className="container">
            <br></br><br></br>
            <h2>Calculate Trip Charges</h2>
            <br></br>
            <br></br>
            <form>
                <DropdownButton id="dropdown-basic-button1" title="Select Category">
                    {categories.map(category =>
                        <Dropdown.Item href="#/action-1">{category.category_name}</Dropdown.Item>
                    )}
                </DropdownButton>
                <br></br>
                <DropdownButton id="dropdown-basic-button2" title="Select Vehicle">
                    {vehicles.map(vehicle =>
                        <Dropdown.Item href="#/action-1">{vehicle.model} {vehicle.name}</Dropdown.Item>
                    )}
                </DropdownButton>
                <br></br>
                <div class="form-group">
                    <label for="exampleInputDuration">Enter Duration</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Duration"></input>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Calculate Trip Charge</button>
            </form>
            <br></br>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Trip Charge</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </InputGroup>

        </div>
    )
}

export default TripCalculate
