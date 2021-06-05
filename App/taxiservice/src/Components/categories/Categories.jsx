import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Categories = () => {

    const [categories, setCategories] = useState([{
        category_name: '',
        category_fee: ''
    }])

    useEffect(() => {
        fetch("http://localhost:5000/categoryR/getCategory").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setCategories(jsonRes));
    })

    return (
        <div className="container">
            <br></br>
            <button><Link to="/addCategoty">Add Category</Link></button>
            <br></br><br></br>
            <h2>Category List</h2>
            <br></br>
            <br></br> 
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Category Type</th>
                        <th scope="col">Category Fee</th>
                    </tr>
                </thead>
                {categories.map(category =>            
                <tbody>
                    <tr>
                        <td>{category.category_name}</td>
                        <td>{category.category_fee}</td>
                    </tr>
                </tbody>
                )}
            </table>
        </div>
    )
}

export default Categories
