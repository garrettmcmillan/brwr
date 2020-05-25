import React, { Component } from 'react'
import * as FormImports from 'react-bootstrap'


export default class CalcForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffeeInput: '',
            brewRatio: '',
            totalAmount: '',
            bloomAmount: '',
            isSubmitted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRatioChange = this.handleRatioChange.bind(this);
    }

    handleSubmit() {
        const totalWater = this.state.coffeeInput * this.state.brewRatio;
        const bloomWater = this.state.coffeeInput * 2;
        const ratio = this.props.value;
        this.setState({
            totalAmount: totalWater,
            bloomAmount: bloomWater,
            brewRatio: ratio,
            isSubmitted: true
        })
        return (
            <div>
                <h1>Total Water Amount: {this.state.totalAmount}</h1>
                <h1>Bloom Amount: {this.state.bloomAmount}</h1>
            </div>
        )    
    }


    handleChange(e) {
        this.setState({
            coffeeInput: e.target.value
        })
    }



    handleRatioChange(e) {
        this.setState({
            brewRatio: e.target.value
        })
    }
    render() {
        return (
            <FormImports.Form className="form-container form-text">
                <FormImports.Form.Group className="entire-form-div">
                    <div className=" form-div" >
                    <FormImports.Form.Row className="  justify-content-center align-items-center">
                        <FormImports.Form.Label column="lg" lg={3} className="form-title">
                            amount of coffee <span role="img" aria-label="emoji finger pointing right">👉</span>
                        </FormImports.Form.Label>
                        <FormImports.Form.Control
                            className=" form-textarea"
                            onChange={this.handleChange}
                            value={this.coffeeInput}
                            placeholder="in grams plz" 
                            type="number"
                            />
                    </FormImports.Form.Row>
                    <FormImports.Form.Row className="  justify-content-center align-items-center">
                        <FormImports.Form.Label column="lg" lg={3} className="form-title">
                            brew ratio <span role="img" aria-label="emoji finger pointing right">👉</span>
                        </FormImports.Form.Label>
                        <FormImports.Form.Control as="select"
                            className="form-ratio"
                            onChange={this.handleRatioChange}
                            value={this.brewRatio}
                            placeholder="standard is 1:16" 
                            type="number"
                            >
                                <option value=''>coffee:water</option>
                                <option value="14">1:14</option>
                                <option value="15">1:15</option>
                                <option value="16">1:16</option>
                                <option value="17">1:17</option>
                                <option value="18">1:18</option>
                        </FormImports.Form.Control>
                    </FormImports.Form.Row>
                    </div>
                <br />
                <FormImports.Button className="form-button" onClick={this.handleSubmit}>calculate h2o</FormImports.Button >
                
                <div className="d-flex justify-content-center">
                    {this.state.isSubmitted === true ?
                        
                        <div className="form-answer-div">
                            <br />
                            <br/>
                            <p className=" form-answer-title">total water amount: {this.state.totalAmount}</p>
                            <p className=" form-answer-title">estimated bloom amount: {this.state.bloomAmount}</p>
                        </div>
                    : 
                        null
                    }
                </div>
                </FormImports.Form.Group>
            </FormImports.Form>
        )
    }
}
