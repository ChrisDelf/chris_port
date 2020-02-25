import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './projects.css';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const Projects = props => {
  return (
    <>
      <div>Projects Go Here</div>{' '}
      <Carousel afterChange={onChange}>
        <div>
          <h3>1</h3>
          <img src="https://images.pexels.com/photos/2406778/pexels-photo-2406778.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        </div>
        <div>
          <img src="../images/space.jpg" />
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default Projects;
