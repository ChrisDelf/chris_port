import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  logo: {
    maxWidth: 120,
    maxHeight: 120,
    margin: 10
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: ' center',
    opacity: 0.8,
    background: 'red'
  },
  logoCon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 400,
    flexWrap: 'wrap',
    opacity: 1
  },
  header: {
    fontSize: '2.8rem',
    fontFamily: 'Patua One',
    marignTop: 30,
    opacity: 1,
    color: "white",
  }
});

const Experience = props => {
  const classes = useStyles();
  return (
    <Card className={classes.main}>
      <h className={classes.header}>Skills</h>
      <div className={classes.logoCon}>
        <img
          className={classes.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
        />
        <img
          className={classes.logo}
          src="https://seeklogo.com/images/P/python-logo-C50EED1930-seeklogo.com.png"
        />
        <img
          className={classes.logo}
          src="https://www.logolynx.com/images/logolynx/e1/e12c387bd8ebccf18a4741b4b83a6d71.png"
        />
        <img
          className={classes.logo}
          src="https://www.logolynx.com/images/logolynx/s_1c/1c0b94695e42daef3474fe2b7b5a12cb.png"
        />
        <img
          className={classes.logo}
          src="https://www.logolynx.com/images/logolynx/a9/a93172b07d2d4d1024885fcb6bb06b33.png"
        />
        <img
          className={classes.logo}
          src="https://www.logolynx.com/images/logolynx/s_4e/4e441838b106d7cb1154de0eb7501381.png"
        />
        <img
          className={classes.logo}
          src="https://www.logolynx.com/images/logolynx/db/dbef5539884535031b032b49dcccf89e.png"
        />
      </div>
    </Card>
  );
};

export default Experience;
