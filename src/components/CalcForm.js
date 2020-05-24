import React, { Component } from 'react'
import * as FormImports from 'react-bootstrap'


export default class CalcForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffeeInput: '',
            totalAmount: '',
            bloomAmount: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        const totalWater = this.state.coffeeInput * 16;
        const bloomWater = this.state.coffeeInput * 2;
        this.setState({
            totalAmount: totalWater,
            bloomAmount: bloomWater
        })
    }

    handleChange(e) {
        this.setState({
            coffeeInput: e.target.value
        })
    }

    render() {
        return (
            <FormImports.Form className="form-div">
                <FormImports.Form.Group>
                <FormImports.Form.Label>amount of coffee</FormImports.Form.Label>
                <textarea
                    onChange={this.handleChange}
                    value={this.coffeeInput}
                    placeholder="in grams plz" />
                <br />
                <button onClick={this.handleSubmit}>calculate h2o</button>
                <h1>Total Water Amount: {this.state.totalAmount}</h1>
                <h1>Bloom Amount {this.state.bloomAmount}</h1>
                </FormImports.Form.Group>
            </FormImports.Form>
        )
    }
}
