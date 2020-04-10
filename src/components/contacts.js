import React, { useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import './projects.css';
import TextArea from 'antd/lib/input/TextArea';
import { useAlert } from 'react-alert';



const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '400px',
    background: 'white'
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
    width: 150,
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
    color: 'black'
  },
  text: {
    height: '200px'
  },
  h2: {
    color: "black"

  }
});

const Contacts = (props, {alert}) => {
  const classes = useStyles();
  console.log(props)


  return (
    <>
      <h className={classes.header}></h>
      <div className={classes.container2}>
        <Card className={classes.card}>
          <h2 className = {classes.h2}>Contact Page</h2>
          <Form className={classes.form}>
            <label className = {classes.h2}>Name</label>
            <Field type="text" name="name" placeholder="Enter your name" />
            {props.touched.name && props.errors.name && (
              <p1 className={classes.error}>{props.errors.name}</p1>
            )}
            <label className = {classes.h2}>Email</label>
            <Field type="email" name="email" placeholder="Enter your email" />
            {props.touched.email && props.errors.email && (
              <p1 className={classes.error}>{props.errors.email}</p1>
            )}
            <label className = {classes.h2}>Phone</label>
            <Field type="text" name="phone" placeholder="Enter your phone #" />
            {props.touched.phone && props.errors.phone && (
              <p1 className={classes.error}>{props.errors.phone}</p1>
            )}
            <label className = {classes.h2}>Message</label>
            <Field
              component="textarea"
              className={classes.text}
              type="text"
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
    </>
  );
};
const FormikContactForm = withFormik({
  mapPropsToValues({ name, email, message, phone }) {
    return {
      name: '',
      email: '',
      message: '',
      phone: ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter a name'),
    email: Yup.string().required('Enter an email address'),
    message: Yup.string().required('Type a message to send')
  }),

  handleSubmit(values) {
    console.log(values);
    axios
      .post('https://young-everglades-15927.herokuapp.com/send', { values })
      .then(res => {
        alert('Message Was sent');
        console.log('res', res);
      })
      .catch(err => alert(err));
  }
})(Contacts);

export default FormikContactForm;
// export default Contacts;
