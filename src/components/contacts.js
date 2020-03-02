import React, { useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ReactContactForm from 'react-mail-form';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '400px'
  },
  media: {
    height: 200
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    margin: '20px 10px',
    background: 'orange'
  },
  error: {
    color: 'red',
    fontSize: '.9rem'
  },
  container2: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    fontSize: '2.8rem',
    fontFamily: 'Patua One',
    opacity: 1,
    color: 'white'
  }
});

const Contacts = props => {
  const classes = useStyles();

  return (
    <>
      <h className={classes.header}>Send me a email!</h>
      <div className={classes.container2}>
        <Card className={classes.card}>
          <h2>Contact Page</h2>
          <Form className={classes.form}>
            <label>Name</label>
            <Field type="text" name="name" placeholder="Enter your name" />
            {props.touched.name && props.errors.name && (
              <p1 className={classes.error}>{props.errors.name}</p1>
            )}
            <label>Email</label>
            <Field type="email" name="email" placeholder="Enter your email" />
            {props.touched.email && props.errors.email && (
              <p1 className={classes.error}>{props.errors.email}</p1>
            )}
            <label>Phone</label>
            <Field type="text" name="Phone" placeholder="Enter your phone #" />
            {props.touched.phone && props.errors.phone && (
              <p1 className={classes.error}>{props.errors.phone}</p1>
            )}
            <label>Message</label>
            <Field
              type="message"
              name="message"
              placeholder="Message goes here"
            />
            {props.touched.message && props.errors.message && (
              <p1 className={classes.error}>{props.errors.message}</p1>
            )}

            <div className={classes.buttons}>
              <Button className={classes.btn} type="submit">
                Send
              </Button>
            </div>
          </Form>
        </Card>
      </div>
      {/* <Card className={classes.card}> */}
      {/*   <ReactContactForm className={classes.card} to="ojoesd@gmail.com" /> */}
      {/* </Card> */}
      {/* </div> */}
    </>
  );
};
const FormikContactForm = withFormik({
  mapPropsToValues({ name, email, message, phone }) {
    return {
      name: '',
      email: '',
      message: '',
      phone:'',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter a name'),
    email: Yup.string().required('Enter an email address'),
    message: Yup.string().required('Type a message to send')
  }),

  handleSubmit(values) {
    console.log(values)
    axios
      .post('https://young-everglades-15927.herokuapp.com/send',
        {values})
      .then(res => {
        console.log('res', res);
      })
      .catch(err => console.log(err));
  }
})(Contacts);

export default FormikContactForm;
// export default Contacts;
