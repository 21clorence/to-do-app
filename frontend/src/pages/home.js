import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../styling/home.css';

const Home = () => {
    //initialize particle effects
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
        }, []);

    //options to specify the particles
    const options = {
        particles: {
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
                  },
                  onClick: {
                    enable: true,
                    mode: "push"
                  }
                },
                modes: {
                  grab: {
                    distance: 140,
                    links: {
                      opacity: 1
                    }
                  },
                  push: {
                    quantity: 4
                  }
                }
                }
            };


    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={options}
          />
            <h1>Home</h1>
            <p>This is the home page.</p>
        </div>
    );

}

export default Home;