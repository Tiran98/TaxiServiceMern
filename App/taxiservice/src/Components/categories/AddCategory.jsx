import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const AddCategory = () => {

    const[input, setInput] = useState({
        category_name: '',
        category_fee: ''
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
        const newCategory = {
            category_name: input.category_name,
            category_fee: input.category_fee
        }
        
        axios.post('http://localhost:5000/categoryR/category', newCategory)
        console.log(newCategory)
    }
    return (
        <div className="container">
            <br></br>
            <form>
                <div class="form-group">
                    <label for="InputCategoryName">Category Name</label>
                    <input onChange={handleChange} name="category_name" value={input.category_name} type="text" class="form-control" id="InputCategoryName" placeholder="Enter Category Name"></input>
                </div>
                <div class="form-group">
                    <label for="InputCategoryFee">Category Fee</label>
                    <input onChange={handleChange} name="category_fee" value={input.category_fee} type="text" class="form-control" id="InputCategoryFee" placeholder="Enter Category Fee"></input>
                </div>
                <br></br>
                <button onClick={handleClick} type="submit" class="btn btn-primary">Add Category</button>
            </form>    
        </div>
    )
}

export default AddCategory
