import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { borderColor } from '@material-ui/system';
import {useHistory} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
    color: 'white',
    borderColor: 'brown'
  }
});
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
          label="About"
          onClick={() => {
            history.push("/");
          }}
        />
        <Tab
          label="Experience"
          onClick={() => {
            history.push("/experience");
          }}
        />

        <Tab
          label="Projects"
          onClick={() => {
            history.push("/projects");
          }}
        />
        <Tab
          label="Contacts"
          onClick={() => {
            history.push("/contact");
          }}
        />
      </Tabs>
    </Paper>
  );
}

  export default CenteredTabs
