import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails.js';
import FormPersonalDetails from './FormPersonalDetails.js';
import Confirm from './Confirm.js';

export class UserForm extends Component {
    state = {
        step: 1,
        name: '',
        // lastName: '',
        email: '',
        // company: '',
        // title: '',
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }


    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }


    render() {
        const { step } = this.state;
        const {name, email} = this.state;
        const values = {name, email}


    // render() {
    //     const { step } = this.state;
    //     const {firstName, lastName, email, company, title} = this.state;
    //     const values = {firstName, lastName, email, company, title}
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
                case 2:
                    return (
                        <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    );
                case 3:
                    return (
                        <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
                    );
                case 4:
                    return <Sucess/>
        }
    }
}

export default UserForm