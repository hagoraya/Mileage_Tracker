import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }


    findtotalcost() {

    }




    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <a>Total Trips: {this.props.tripl.length}</a>
                    <br></br>
                    <a>Total Cost: </a>
                </div>
            </div>
        );
    }
}