import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import Appbar from '@material-ui/Appbar';
import TextField from '@material-ui/TextField';
import RaisedButton from '@material-ui/RaisedButton';
import { StylesContext } from '@material-ui/styles';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Enter User Details" />
                    <TextField
                    hintText="Enter Your Name" 
                    floatingLabelText="Name"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    />
                    <br/>
                    {/* <TextField
                    hintText="Enter Your Last Name" 
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Email" 
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    /> */}
                    <br/>
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
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

export default FormUserDetails;