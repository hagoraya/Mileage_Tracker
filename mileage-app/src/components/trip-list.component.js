import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TotalResult from "./total-result.component";



const Trip = props => (
    <tr>
        <td>{props.trip.name}</td>
        <td>{props.trip.distance}</td>
        <td>{props.trip.vehicle}</td>
        <td>{props.trip.fuel_price}</td>
        <td>{props.trip.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.trip._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteTrip(props.trip._id) }}>Delete</a>
        </td>

    </tr>
)

export default class ListTrip extends Component {
    constructor(props) {
        super(props);

        this.deleteTrip = this.deleteTrip.bind(this);
        this.state = {
            trips: [],
            alert_message: '',
        };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/trips')
            .then(res => {
                this.setState({
                    trips: res.data
                })
            })
            .catch((err) => {
                console.log('Error while getting trips: ' + err);
                this.setState({
                    alert_message: 'error'
                });


            })
    }

    showAlert() {
        if (this.state.alert_message === 'error') {
            return <div className="alert alert-danger" role="alert">Cannot connect to database</div>
        } else {
            return (null)
        }
    }



    deleteTrip(id) {
        axios.delete('http://localhost:5000/trips/delete/' + id)
            .then(res => { console.log('Deleted Trip') });

        this.setState({
            trips: this.state.trips.filter(ele => ele._id !== id)
        });
    }

    tripList() {
        return this.state.trips.map(currentTrip => {
            return <Trip trip={currentTrip} deleteTrip={this.deleteTrip} key={currentTrip._id}></Trip>
        })
    }

    render() {
        return (
            <div>
                <h3>My Trips</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Distance</th>
                            <th>Vehicle</th>
                            <th>Fuel Price</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tripList()}
                    </tbody>
                </table>
                {this.showAlert()}
                <TotalResult tripl={this.state.trips} ></TotalResult>
            </div >
        )
    }
}