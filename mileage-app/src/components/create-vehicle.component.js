import React, { Component } from 'react';
import axios from 'axios';

export default class CreateVehicle extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFuelEconomy = this.onChangeFuelEconomy.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            fuel_economy: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeFuelEconomy(e) {
        this.setState({
            fuel_economy: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const vehicle = {
            name: this.state.name,
            fuel_economy: this.state.fuel_economy
        }

        console.log(vehicle);

        axios.post('http://localhost:5000/vehicle/add', vehicle)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            fuel_economy: ' '
        })


    }

    render() {
        return (
            <div>
                <h3>Add a new Vehicle</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fuel Economy:</label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.fuel_economy}
                            onChange={this.onChangeFuelEconomy}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}