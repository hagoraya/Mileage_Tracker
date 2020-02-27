import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangefuel_price = this.onChangefuel_price.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            distance: 0,
            fuel_price: 0,
            date: new Date(),
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/trips/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    distance: res.data.distance,
                    fuel_price: res.data.fuel_price,
                    date: new Date(res.data.date)
                })
            })
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

    onChangefuel_price(e) {
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

        axios.post('http://localhost:5000/trips/update/' + this.props.match.params.id, trip)
            .then(res => console.log(res.data));
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Update Trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input ref="userInput"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Distance: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.distance}
                            onChange={this.onChangeDistance}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fuel Price: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.fuel_price}
                            onChange={this.onChangefuel_price}
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
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}