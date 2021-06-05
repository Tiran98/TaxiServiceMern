import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles'

const Home = () => {
    const classes = useStyles();
    
    return (
        <div className="container">
            <div>
                <Link to={`/vehicles`}>
                    <button>Vehicles</button> 
                </Link>
                <Link to={`/categories`}>
                    <button>Categories</button> 
                </Link>
                <Link to={`/tripCal`}>
                    <button>Shedule Your Ride</button> 
                </Link>               
            </div>
        </div>
    )
}

export default Home