import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import Appbar from '@material-ui/Appbar';
import {List, ListItem} from '@material-ui/List';
import RaisedButton from '@material-ui/RaisedButton';
import { StylesContext } from '@material-ui/styles';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    // render() {
    //     const { values: {firstName, lastName, email, company, title}} = this.props;
        
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Success" />
                    <h1>Thank You For Your Submission</h1>
                    <p></p>
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

export default Success;