import React from 'react'
import Header from './Layouts/Header'
import AppRoute from './routes'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const App = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#ffeebb", "#aaddff"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: { min: 1, max: 2 }, random: true },
            move: { enable: true, speed: 0.3, direction: "none", outModes: { default: "bounce" } },
            links: { enable: false },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <AppRoute />
    </>
  )
}

export default App