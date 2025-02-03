import { ISourceOptions } from "@tsparticles/engine";

export const PARTICLES_OPTIONS: ISourceOptions = {
  background: {
    color: {
      value: "#ffffff",
    },
  },
  particles: {
    number: {
      value: 16,
      density: {
        enable: true,
        width: 800,
      },
    },
    color: {
      value: "#c8c8c8",
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#c8c8c8",
      opacity: 0.7,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      straight: true,
      outModes: "out",
      attract: {
        enable: true,
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      onClick: {
        enable: false,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 100,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 10,
        duration: 2,
        opacity: 8,
        speed: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
};
