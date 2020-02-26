import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeFuelprice = this.onChangeFuelprice.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            distance: '',
            fuelprice: 0,
            date: new Date(),
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

    onChangeFuelprice(e) {
        this.setState({
            fuelprice: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            name: this.state.name,
            distance: this.state.distance,
            fuelprice: this.state.fuelprice,
            date: this.state.date
        }

        console.log(exercise);

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
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
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.distance}
                            onChange={this.onChangeDistance}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fuel Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.fuelprice}
                            onChange={this.onChangeFuelprice}
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
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}