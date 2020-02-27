import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Trip = props => (
    <tr>
        <td>{props.trip.name}</td>
        <td>{props.trip.distance}</td>
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
        this.state = { trips: [] };
    }


    componentDidMount() {
        axios.get('http://localhost:5000/trips')
            .then(res => {
                this.setState({
                    trips: res.data
                })
            })
            .catch((err) => {
                console.log('Error while getting trips: ' + err)
            })
    }


    deleteTrip(id) {
        axios.delete('https://localhost:5000/trips/delete/' + id)
            .then(res => { console.log('Deleted Trip') });

        this.setState({
            trips: this.state.trips.filter(ele => ele._id !== id)
        });
    }

    tripList() {
        return this.state.trips.map(currentTrip => {
            return <Trip trip={currentTrip} deleteTrip={this.deleteTrip} ket={currentTrip._id}></Trip>
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Distance</th>
                            <th>Fuel Price</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tripList()}
                    </tbody>
                </table>
            </div>
        )
    }
}