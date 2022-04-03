import React, { useState } from 'react';

export const RocketsContext = React.createContext({
  rockets: [], weather: null
});

const Fn = props => { 
  
  const [rockets, setRockets] = useState([]);

  const populateRocketsList = (arr) => setRockets([...arr]);

  const listenLaunchedRocket = (port, host) => {
    alert(host+':'+port);
  }

  const launchRocket = (rocket) => {
    const { id, status } = rocket;
    console.dir(rocket);
    if (status !== "launched") {
      fetchRocketAction(id,'launched','PUT', rocket.port, rocket.host);
    } else {
      alert("rocket " + id + "'s condition is unsuitable");
      console.log("rocket " + id + "'s condition is unsuitable");
    }
  }

  const deployRocket = (rocket) => {
    const { id, status } = rocket;
    if (status !== "deployed") {
      fetchRocketAction(id,'deployed','PUT', rocket.port, rocket.host);
    } else {
      alert("rocket " + id + "'s condition is unsuitable");
      console.log("rocket " + id + "'s condition is unsuitable");
    }
  }

  const cancelRocket = (rocket) => {
    const { id, status } = rocket;
    if (status !== "cancelled") {
      fetchRocketAction(id,'launched','DELETE', rocket.port, rocket.host);
    } else {
      alert("rocket " + id + "'s condition is unsuitable");
      console.log("rocket " + id + "'s condition is unsuitable");
    }
  }
  
  async function fetchRocketAction(id,action,method, port, host) {
    if (action === 'launched') {
      if (method === 'PUT') {
        listenLaunchedRocket(port, host);
      }
    }
    try {
      await fetch('http://localhost:5000/rocket/'+id+'/status/'+action, { 
        method: method,
        mode: 'cors',
        headers: new Headers({
          'X-API-Key': 'API_KEY_1',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response.hasOwnProperty("code") && response.code !== 200) {
          alert(response.message);
          console.dir(response.message);
        }
      });
    } catch (error) {
      alert("ERROR: rocket " + id + " / " + error);
      console.log("ERROR: rocket " + id + " / " + error);
    }
  }

  return (
      <RocketsContext.Provider value={{ 
          rockets,
          setRockets,
          populateRocketsList,
          launchRocket,
          deployRocket,
          cancelRocket,
        }}>
        {props.children}
      </RocketsContext.Provider>
    );
  };
 
export default Fn;
