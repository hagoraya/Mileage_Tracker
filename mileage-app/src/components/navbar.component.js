import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Mileage Tracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Trips</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add Trip</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/vehicle" className="nav-link">Add Vehicle</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}