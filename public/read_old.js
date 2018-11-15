import React from 'react';
import ReactDOM from 'react-dom';
// var React = require('react');
// var ReactDOM = require('react-dom');

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { houseandlot: [] };

    fetch('http://localhost:3000/admin')
      .then(resposnse => response.json())
      .then(houseandlot => (this.setState({houseandlot})))
  }

    render() {
        return (
        <div class="container">
            <h1>Dashboard</h1>
            <div class="row d-md-flex flex-md-equal my-md-3 pl-md-3">      
            <div class="col card">
                <table class="table">
                <thead>
                    <tr>
                        <td>Lot area (sq.m.)</td>
                        <td>Floor area (sq.m.)</td>
                        <td>Address</td>
                        <td>Year acquired</td>
                        <td>Condition</td>
                        <td>Price (PHP)</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>                   
                    {this.state.houseandlot.map(houseandlotx =>
                        <tr key={houseandlotx.h_id}>
                        <td>{houseandlotx.la} </td>
                        <td>{houseandlotx.fa} </td>
                        <td>{houseandlotx.address} </td>
                        <td>{houseandlotx.year_ac}</td>
                        <td>{houseandlotx.cond}</td>
                        <td>{houseandlotx.price}</td>
                        <td><a>Edit</a>|<a>Delete</a></td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        );
    }
}