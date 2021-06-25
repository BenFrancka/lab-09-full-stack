import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header>
                <h2>Meal Kits Page</h2>
                <p className="link"><Link to="/">Home</Link></p>
                <p className="link"><Link to="/create">Add meal</Link>
                </p> 
            </header>
        )
    }
}
