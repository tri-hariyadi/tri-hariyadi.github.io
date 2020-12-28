import React from 'react';
import Particles from "react-particles-js";
import { particlesOptions } from "../../utils/particlesOptions";
import { Hero, Skills } from '../../components';
import './index.scss';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
    </div>
  )
}

export default Home;
