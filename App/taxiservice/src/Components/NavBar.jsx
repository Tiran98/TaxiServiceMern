import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-dark container">
                <h4><Link to="/">Home</Link></h4>
                <h4><Link to="/vehicles">Vehicles</Link></h4>
                <h4><Link to="/categories">Categories</Link></h4>
                <h4><Link to="/tripCal">Shedule Your Ride</Link></h4>
            </nav>
        </div>
    )
}

export default NavBar
