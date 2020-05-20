import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

export default function SimpleModal(props) {
  // console.log('**** props', props)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // const [updateUser, setUpdateUser] = React.useState({
  //   name: props.user.name,
  //   email: props.user.email
  // });
  // console.log('**& update user', updateUser);

  const handleChanges = (e) => {
    e.preventDefault();
    props.setUser({...props.user, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("%$#%$#%$#%", props.user)
    axios.put(`http://localhost:3232/api/persons/${props.user.id}`, props.user)
    .then(res => console.log('*** axios put', res))
    .catch(err => console.error(err))
    .finally(()=>{
      closeModal()
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Edit User</h2>
      <p id="simple-modal-description">
        <form class="container">
          <label for="name"><b>Name</b></label>
          <input type="text" value={props.user.name} onChange={handleChanges} name="name" required />
          <br />
          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" value={props.user.email} onChange={handleChanges} name="email" required />
          <br />
          <button onClick={handleSubmit} type="submit">Confirm</button>
          <label />

        </form>
      </p>
    </div>
  );

  return (
    <div>
      <Button variant="text" color='inherit' type="button" disableRipple onClick={handleOpen}>
        Edit User
      </Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}