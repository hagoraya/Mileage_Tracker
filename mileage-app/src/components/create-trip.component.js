import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class CreateTrip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            distance: 0,
            fuel_price: 0,
            date: new Date()
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDistance(e) {
        this.setState({
            distance: e.target.value
        })
    }

    onChangeFuel_price(e) {
        this.setState({
            fuel_price: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const trip = {
            name: this.state.name,
            distance: this.state.distance,
            fuel_price: this.state.fuel_price,
            date: this.state.date
        }

        console.log(trip);

        window.location = '/';

    }


    render() {
        return (
            <div>
                <h3>Create Trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="string"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Distance (in Km): </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.distance}
                            onChange={this.onChangeDistance}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fuel Price (in minutes): </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.fuel_price}
                            onChange={this.onChangeFuel_price}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Trip" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}