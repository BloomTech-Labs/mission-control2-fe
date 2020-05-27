import React from 'react';
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
    delButton: {
        marginTop: '26%',
        marginRight: '10px'
    },
    ynButton: {
        marginRight: '7px'
    }
}));
const ProgramDel = (props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:3232/api/products/${props.props}`)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => console.log('error', err))
            .finally(window.location.reload())
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">are you sure ?? this cannot be reversed.</h2>
            <Button className={classes.ynButton} variant="contained" color="primary" onClick={handleSubmit}>Yes</Button>
            <Button className={classes.ynButton} variant="contained" color="primary" onClick={handleClose}>No</Button>
        </div>
    );

    return (
        <div>
            <Button className={classes.delButton} type="button" variant="contained" color="primary" onClick={handleOpen}>
                Delete
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
export default ProgramDel;