let homeParticleOptions = () => {
    return {
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
}


export default homeParticleOptions;