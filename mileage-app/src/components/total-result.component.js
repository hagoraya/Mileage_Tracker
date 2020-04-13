import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }


    findtotalcost() {
        let res = 0
        {
            this.props.tripl.map((item) =>
                res = res + (item.distance * item.fuel_price)
            )
        }
        return res;
    }




    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <a>Total Trips: {this.props.tripl.length}</a>
                    <br></br>
                    <a>Total Cost: ${this.findtotalcost()}</a>
                </div>
            </div>
        );
    }
}