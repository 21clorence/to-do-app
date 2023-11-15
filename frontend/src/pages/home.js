import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../styling/home.css';
import '../styling/global.css';
import homeParticleOptions from "../tsparticles-options/homebackground.js";

const Home = () => {
    //initialize particle effects
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
        }, []);

    //god awful long options for particle effects
    const options = {
      background: {
        color: {
          value: "#170A1C"
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
              enable: false,
              area: 800
          }
        },
        color: {
          value: ["#0B4F6C", "#145C9E"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
            value: { min: 1, 
                     max: 8 }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#FBFBFB",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 5,
          direction: "bottomRight",
          random: true,
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
              options={homeParticleOptions()}
          />
          <div className="homepage-layout">
            <div className="left-side">
              <h1>Get done what you need to, and only that</h1>
            </div>
            <div className="image-container">

            </div>
          </div>
          
        </div>
    );

}

export default Home;