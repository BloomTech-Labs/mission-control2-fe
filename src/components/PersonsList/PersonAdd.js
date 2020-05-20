import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function PersonAdd() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [person, setPerson] = useState({name: '', email: ''});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Handle Submit', person)
axios
    .post('http://localhost:3232/api/persons', person)
    .then(res => console.log(res))
    .catch(err => console.log('error', err))
      setOpen(false);
  };




  const body = (
    <form style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Create New Person</h2>
      <br/>
      <label for="name"><b>Name:</b></label><br/>
      <input type="text" placeholder="Enter Name" name="name" value={person.name} onChange={(e) => setPerson({...person, name: e.target.value})} required/>
      <br/>
      <label for="email"><b>Email:</b></label><br/>
      <input type="text" placeholder="Enter Email" name="email" value={person.email} onChange={(e) => setPerson({...person, email: e.target.value})} required/>
        <br/><br/>
      <Button onClick={handleSubmit}>Submit!</Button>
    </form>
  );

  return (
    <div>
      <Button type="button" color="primary" onClick={handleOpen}>
        Create New Person
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}