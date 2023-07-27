import React, { useCallback } from "react";
import Particles from 'react-tsparticles';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ParticleWrapper } from './LayoutComponents';
import { loadFull } from "tsparticles";

const particleParams = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: {
      value: "transparent",
    },
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


export function PParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Particles
      id="tsparticles"
      options={particleParams}
      init={particlesInit}
      width="100%"
      height="100%"
    />
  );
}


export default function Background(props) {
  const image = getImage(props.data);
  return (
    <ParticleWrapper>
      {/* <PParticles /> */}
      <GatsbyImage className="background" image={image} />
    </ParticleWrapper>
  );
}
