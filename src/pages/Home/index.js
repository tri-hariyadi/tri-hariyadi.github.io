import React from 'react';
import Particles from "react-particles-js";
import { particlesOptions } from "../../utils/particlesOptions";
import {
  Hero,
  Skills,
  AboutMe
} from '../../components';
import './index.scss';

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <Hero />
      <Skills />
      <AboutMe />
    </div>
  )
}

export default Home;
