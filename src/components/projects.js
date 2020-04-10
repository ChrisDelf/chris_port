import React, { useState } from 'react';

// import { Carousel } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './projects.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    fontSize: '2.8rem',
    fontFamily: 'Patua One',
    marignTop: 30,
    opacity: 1,
    color: 'white'
  }
});

const Projects = props => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const classes = useStyles();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className = "carouselCon">
      <h className={classes.header}>Projects</h>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        interval={15000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/scenic-view-of-mountains-during-dawn-1266810.jpg')}
            alt="Image of road next to a Ugandan lake"
          />
          <Carousel.Caption>
            <h3>Safe-Mothers-Uganda</h3>
            <p>
              This application is a React front-end with a Redux state
              management and designed with the pricelineone design system. The
              back-end is running on Node.js and Express with a PostgrSQL
              database. The interaction between mothers and drivers is handled
              via the FrontlineSMS app for all SMS communications. My
              contribution to this project connecting FrontLimeSMS to our
              Node.js server. Also,I created a script that periodically checks
              the database for rides that need to be reassigned a new driver after
              the assigned driver fails to response after 5 minutes.
            </p>
            <div className="ButtonCon">
              <Button
                color="#e3dac9"
                variant="contained"
                href="https://github.com/Lambda-School-Labs/safe-mothers-be"
              >
                GitHub
              </Button>
              <Button
                color="#e3dac9"
                variant="contained"
                href="https://www.youtube.com/watch?v=KM4jNYUOg7Y&t=8s"
              >
                Demo Link
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/dungeon.jpeg')}
            alt="Image of caves on a cliff face"
          />

          <Carousel.Caption>
            <h3>Dungeon Explorer </h3>
            <p>
              Created a Java Spring Boot application using Oauth2
              authentication, and 2h database. The app generates a 2d grid that
              has randomly generated rooms that are connect to each other. Users
              can move around explore these room.
            </p>
            <div className="ButtonCon">
              <Button
                color="#e3dac9"
                variant="contained"
                href="https://github.com/Lambda-School-Labs/safe-mothers-be"
              >
                GitHub
              </Button>
              <Button
                color="#e3dac9"
                variant="contained"
                href=""
              >
                Demon Link
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Image of the miklyway"
          />

          <Carousel.Caption>
            <h3>Finding Planets</h3>
            <p>
              Working with a team of data scientists and a back-end developer.
              I, along with 2 other front end developers, help create a
              front-end that allows users to sign-up and vote on which stars are
              most likely to have planets orbiting them. My main contribution to
              project was implementing a state management system, and handling the storage images.
            </p>
            <div className="ButtonCon">
              <Button
                color="#e3dac9"
                variant="contained"
                href="https://github.com/orgs/BW-Finding-Planets/dashboard"
              >
                GitHub
              </Button>
              <Button
                color="#e3dac9"
                variant="contained"
                href="https://findingplanets.netlify.com/"
              >
                Demo Link
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Projects;
