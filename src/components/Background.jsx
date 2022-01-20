import React from 'react';
import Particles from 'react-tsparticles';
import Img from 'gatsby-image';
import { ParticleWrapper } from './LayoutComponents';

const particleParams = {
  fullScreen: {
    enable: false
  },
  fpsLimit: 30,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 20,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
};

const color = '#75A5B7';
const maxParticles = 80;
export default class Background extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <ParticleWrapper>
        <Img className="background" fluid={this.props.data.childImageSharp.fluid} />
        <Particles className="particles" options={particleParams} />
      </ParticleWrapper>
    );
  }
}
