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
            <React.Fragment>
            <div className="full-page-container">
            <FormImports.Form className="form-wrapper form-text">
                <FormImports.Form.Group className="entire-form-div">
                    <div className="form-div" >
                    <FormImports.Form.Row className="justify-content-center align-items-center">
                        <FormImports.Form.Label column="lg" lg={4} className="form-title">
                            Amount of Coffee  <span role="img" aria-label="emoji finger pointing right">👉</span>
                        </FormImports.Form.Label>
                        <FormImports.Form.Control
                            className="form-textarea"
                            onChange={this.handleChange}
                            value={this.coffeeInput}
                            placeholder="in grams plz" 
                            type="number"
                            />
                    </FormImports.Form.Row>
                    <FormImports.Form.Row className="justify-content-center align-items-center">
                        <FormImports.Form.Label column="lg" lg={4} className="form-title bg-transparent">
                            Brew Ratio  <span role="img" aria-label="emoji finger pointing right">👉</span>
                        </FormImports.Form.Label>
                        <div className="select-style">
                        <FormImports.Form.Control as="select"
                            className="form-ratio bg-transparent"
                            onChange={this.handleRatioChange}
                            value={this.brewRatio}
                            type="number"
                            >
                                <option className="" value=''>coffee:water</option>
                                <option value="14">1:14 ~stronger</option>
                                <option value="15">1:15</option>
                                <option value="16">1:16</option>
                                <option value="17">1:17</option>
                                <option value="18">1:18 ~weaker</option>
                        </FormImports.Form.Control>
                        </div>
                    </FormImports.Form.Row>
                    </div>
                <br />
                <FormImports.Button className="form-button" onClick={this.handleSubmit}>Calculate.</FormImports.Button >
                
                <div className="d-flex justify-content-center">
                    {this.state.isSubmitted === true ?
                        
                        <div className="form-answer-div">
                            <p className="form-answer-title">
                                
                                    Bloom Amount <span role="img" aria-label="emoji finger pointing right">👉</span> {this.state.bloomAmount}ml
                                
                            </p>
                            <p className="form-answer-title">
                                Total Water Amount <span role="img" aria-label="emoji finger pointing right">👉</span> {this.state.totalAmount}ml
                                
                            </p>
                            
                        </div>
                    : 
                        null
                    }
                </div>
                </FormImports.Form.Group>
            </FormImports.Form>
            </div>
            </React.Fragment>
        )
    }
}
