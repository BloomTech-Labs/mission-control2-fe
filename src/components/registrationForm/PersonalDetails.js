import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import Appbar from '@material-ui/Appbar';
import TextField from '@material-ui/TextField';
import RaisedButton from '@material-ui/RaisedButton';
import { StylesContext } from '@material-ui/styles';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Enter Personal Details" />
                    {/* <TextField
                    hintText="Enter Your Company Name" 
                    floatingLabelText="Company"
                    onChange={handleChange('company')}
                    defaultValue={values.company}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Job Title" 
                    floatingLabelText="title"
                    onChange={handleChange('title')}
                    defaultValue={values.title}
                    />
                    <br/> */}
                    <TextField
                    hintText="Enter Your Email" 
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }

    }
    const styles = {
        button: {
            margin: 15
        }
}

export default FormPersonalDetails;