import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangefuel_price = this.onChangefuel_price.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            distance: '',
            fuel_price: '',
            date: new Date(),
            alert_message: '',
        }
    }

    componentDidMount() {


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

        axios.post('http://localhost:5000/trips/add', trip)
            .then(res => {
                console.log(res.data);
                this.setState({ alert_message: 'success' })
            })
            .catch(err => {
                this.setState({ alert_message: 'error' })
            })

    }

    showAlert() {
        if (this.state.alert_message === 'success') {
            return <div class="alert alert-primary" role="alert"> Trip Added </div>
        } else if (this.state.alert_message === 'success') {
            return <div class="alert alert-danger" role="alert"> Error </div>
        } else {
            return (null)
        }
    }

    render() {
        return (
            <div>
                <h3>Add Trip</h3>
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
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
                {this.showAlert()}
            </div>
        )
    }
}