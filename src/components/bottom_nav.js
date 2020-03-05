import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
const useStyles = makeStyles({
  root: {
    justiftyContent: 'center',
    background: 'Darkgreen',
    color: 'white',
    fontSize: '2rem'
  },
  action: {
    color: 'white',
    fontSize: '2rem'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.action}
        label="GitHub"
        href="https://github.com/ChrisDelf"
      />
      <BottomNavigationAction
        className={classes.action}
        label="Linkedin"
        href="https://www.linkedin.com/in/chris-delfaus-61356986/"
      />
      <BottomNavigationAction className={classes.action} label="Resume" href = "https://drive.google.com/file/d/1-X-HyruqOOHGikWSLoE8UuV3j0Fy8qZr/view?usp=sharing" />
    </BottomNavigation>
  );
}
