import React, { useEffect, useState } from 'react';
import { Dropdown, MenuItem, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'
import axios from 'axios';


const TripCalculate = () => {

    const [vehicles, setVehicles] = useState([{
        model: '',
        name: ''
    }])
    const [categories, setCategories] = useState([{
        category_name: '',
    }])

    const[input, setInput] = useState({
        category_name: '',
        name: '',
        duration: ''
    })

    var[tripCharge, setCharge] = useState([])
    var [catgoryF, setCatgoryF] = useState([]);
    var [vehicleF, setVehicleF] = useState([]);

    const handleValue =(event) =>{
        setCharge(event)
    }

    const handleChange =(event) =>{
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

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

    const[outputC,setdataC] = useState([]);
    const[outputV,setdataV] = useState([]);
    const DblhandleC=(e)=>{
        setdataC(e);
    }
    const DblhandleV=(e)=>{
        setdataV(e);
    }

    const handleClick =(event) =>{
        event.preventDefault();
        
        const categoryInfo = {
            category_name : outputC,
        }
        const vehicleInfo = {
            name : outputV,
        }

        axios.post('http://localhost:5000/categoryR/getCategoryFee',categoryInfo).then(res => {
            catgoryF = res.data;
            setCatgoryF({catgoryF})
            //console.log(catgoryF.category_fee)

            axios.post('http://localhost:5000/vehicleR/getVehicleFee',vehicleInfo).then(res => {
                vehicleF = res.data;
                setVehicleF({vehicleF})
                //console.log(vehicleF.hire_fee)

                console.log(catgoryF.category_fee)
                console.log(vehicleF.hire_fee)

                var tripValue = parseInt(vehicleF.hire_fee) + parseInt(catgoryF.category_fee) + (parseInt(input.duration) * 850);
                console.log(tripValue)

                setCharge(tripValue)
            })
            
        })
    }
    
    return (
        <div className="container">
            <br></br><br></br>
            <h2>Calculate Trip Charges</h2>
            <br></br>
            <br></br>
            <form>
                <DropdownButton onSelect={DblhandleC} name="category_name" id="dropdown-basic-button1" title={outputC}>
                    {categories.map(category =>
                        <Dropdown.Item eventKey={category.category_name} >{category.category_name}</Dropdown.Item>
                    )}
                </DropdownButton>
                <br></br>
                <DropdownButton onSelect={DblhandleV} name="name" id="dropdown-basic-button2" title={outputV}>
                    {vehicles.map(vehicle =>
                        <Dropdown.Item eventKey={vehicle.name} >{vehicle.name}</Dropdown.Item>
                    )}
                </DropdownButton>
                <br></br>
                <div class="form-group">
                    <label for="exampleInputDuration">Enter Duration</label>
                    <input onChange={handleChange} type="text" name="duration" class="form-control" id="exampleInputEmail1" placeholder="Enter Duration"></input>
                </div>
                <br></br>
                <button onClick={handleClick} type="submit" class="btn btn-primary">Calculate Trip Charge</button>
            </form>
            <br></br>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Trip Charge</InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl onChange={handleValue} value={tripCharge} name="tripValue" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </InputGroup>

        </div>
    )
}

export default TripCalculate
