import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
const useStyles = makeStyles({
  root: {
    justiftyContent: 'center',
    background: 'white',
    color: 'black',
    fontSize: '2rem'
  },
  action: {
    color: 'black',
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
      {/* <BottomNavigationAction */}
      {/*   className={classes.action} */}
      {/*   label="GitHub" */}
      {/*   href="https://github.com/ChrisDelf" */}
      {/* /> */}
      {/* <BottomNavigationAction */}
      {/*   className={classes.action} */}
      {/*   label="Linkedin" */}
      {/*   selected="white" */}
      {/*   href="https://www.linkedin.com/in/chris-delfaus-61356986/" */}
      {/* /> */}
      {/* <BottomNavigationAction */}
      {/*   className={classes.action} */}
      {/*   label="Resume" */}
      {/*   href="https://drive.google.com/file/d/1-X-HyruqOOHGikWSLoE8UuV3j0Fy8qZr/view?usp=sharing" */}
      {/* /> */}

      <CardActions>
        <Button
          className={classes.action}
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/chris-delfaus-61356986/"
        >
          Linkedin
        </Button>
        <Button
          className={classes.action}
          size="small"
          color="primary"
          href="https://www.canva.com/design/DAD2EE2Az5c/Dk9N0Q3Xc_Z5hkCn3TFDqQ/view?utm_content=DAD2EE2Az5c&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
        >
          Resume
        </Button>
        <Button
          className={classes.action}
          size="small"
          color="primary"
          href="https://github.com/ChrisDelf"
        >
          GitHub
        </Button>
      </CardActions>
    </BottomNavigation>
  );
}
