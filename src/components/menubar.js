import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {borderColor} from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
    color: 'white',
    borderColor: 'brown'
  }
});

export default function CenteredTabs() {
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
        <Tab label="About" />
        <Tab label="Experience" />
        <Tab label="Projects" />
        <Tab label="Contacts" />
      </Tabs>
    </Paper>
  );
}
