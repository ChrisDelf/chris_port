import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    margin: 100,
    background: 'lightgreen',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.7rem !important',
      marginTop: 30,
      margin: 10
    }
  },
  media: {
    height: 300
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  p: {
    color: 'darkblue'
  },
  buttonCon: {
    justifyContent: 'center'
  }
}));
const About = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <img
            className={classes.media}
            src={require('../images/fishing.png')}
            title="picture of fishing"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Chris Delfaus
            </Typography>
            <Typography
              className={classes.p}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              I’m a web developer that loves using new technologies to create
              new things. I enjoy struggling through coding challenges and
              painting miniatures. The languages and libraries I have experience
              with are Node.js,React.js, Postgres, Python, Flask, Java, and
              Django.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonCon}>
          <Button
            size="small"
            color="primary"
            href="https://www.linkedin.com/in/chris-delfaus-61356986/"
          >
            Linkedin
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.canva.com/design/DAD2EE2Az5c/Dk9N0Q3Xc_Z5hkCn3TFDqQ/view?utm_content=DAD2EE2Az5c&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
          >
            Resume
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default About;
