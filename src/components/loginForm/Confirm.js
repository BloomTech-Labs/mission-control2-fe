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
        const { values: {name, email}} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Confirm User Data" />
                    <List>
                        <ListItem 
                            primaryText="name"
                            secondaryText={ name }
                        />
                        {/* <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        /> */}
                        <ListItem 
                            primaryText="email"
                            secondaryText={ email }
                        />
                        {/* <ListItem 
                            primaryText="Company"
                            secondaryText={ company }
                        />
                        <ListItem 
                            primaryText="Job Title"
                            secondaryText={ title }
                        /> */}
                    </List>
                    <br/>
                    <RaisedButton
                    label="Confirm & Continue"
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

export default FormUserDetails;