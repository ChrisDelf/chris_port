import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    margin: 100,
    background: 'lightgreen',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: red[400],
      fontSize: '.7rem !important',
      marginTop: 20,
      margin:10
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
  }
}));
const About = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://avatars1.githubusercontent.com/u/51103329?s=460&v=4"
            title="Contemplative Reptile"
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
              with are Node.js,Reactjs, Postgres, Python, Flask, Java, and
              Django.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://www.linkedin.com/in/chris-delfaus-61356986/"
          >
            Linkein
          </Button>
          <Button size="small" color="primary">
            Resume
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default About;
