import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { borderColor } from '@material-ui/system';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { red } from '@material-ui/core/colors';
import './projects.css';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'brown',
    // [theme.breakpoints.down('sm')]: {
    //   backgroundColor: red[400],
    //   fontSize:'.7rem !important',
    // },
    tab: {
      [theme.breakpoints.down('sm')]: {
       fontSize:'.7rem !important',
      }
    }
  }
}));
const CenteredTabs = props => {
  let history = useHistory();
  console.log(history);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="white"
        centered
      >
        {/* <Tab */}
        {/*   label="Home" */}
        {/*   onClick={() => { */}
        {/*     history.push("/"); */}
        {/*   }} */}
        {/* /> */}
        <Tab
          className={classes.tab}
          label="About"
          onClick={() => {
            history.push('/');
          }}
        />
        {/* <Tab */}
        {/*   label="Skills" */}
        {/*   onClick={() => { */}
        {/*     history.push('/skills'); */}
        {/*   }} */}
        {/* /> */}

        <Tab
          className={classes.tab}
          label="Projects"
          onClick={() => {
            history.push('/projects');
          }}
        />
        <Tab
          className={classes.tab}
          label="Contact"
          onClick={() => {
            history.push('/contact');
          }}
        />
      </Tabs>
    </Paper>
  );
};

export default CenteredTabs;
