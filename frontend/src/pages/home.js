import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../styling/home.css';
import '../styling/global.css';

const Home = () => {
    //initialize particle effects
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
        }, []);

    //god awful long options for particle effects
    const options = {
      background: {
        color: {
          value: "#2d2d2d"
        }
      },
      particles: {
        fullScreen: {
          enable: true,
          zIndex: 1
        },
        number: {
          value: 80,
          density: {
              enable: true,
              area: 800
          }
        },
        color: {
          value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
            value: { min: 1, max: 8 }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#808080",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 5,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out"
        }
      },
      interactivity: {
        events: {
          onHover: {
              enable: true,
              mode: "grab"
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1
            }
          }
        }
      }
    };


    return (
        <div id = "main-parent-div">
          <Particles
              id="tsparticles"
              init={particlesInit}
              options={options}
          />
          <div className="homepage-layout">
            <div className="left-side">
              <h1>Get done what you need to</h1>
            </div>
            <div className="image-container">

            </div>
          </div>
          
        </div>
    );

}

export default Home;