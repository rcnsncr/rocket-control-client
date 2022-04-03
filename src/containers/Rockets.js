import React, { useContext, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import { RocketsContext } from '../context/rockets-context';
import Weather from './Weather';
import RocketItem from '../components/Rockets/RocketItem';

const ENDPOINT = "http://localhost:3000";
const delayData = 3500;

const Rockets = props => {

  const {rockets, populateRocketsList} = useContext(RocketsContext);

  let loadDatas = async () => {
      try {
        const socket = socketIOClient(ENDPOINT);
        socket.on("r-data", data => {
          if (data != null) {
            var temp = {};
            temp = data;
            if (temp.hasOwnProperty("rockets") && Array.isArray(data.rockets)) {
              populateRocketsList(data.rockets);
            }
          }
        });
      } catch (e) {
          console.log(e)
      }
  }
  let repeatFunc = async () => {
    await loadDatas();
    setTimeout(async () => {
        await loadDatas();
        repeatFunc();
    }, delayData);
  }

  useEffect(() => {
    repeatFunc();
  }, []);

    /*
    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      socket.on("r-data", data => {
        if (data != null) {
          var temp = {};
          temp = data;
          if (temp.hasOwnProperty("rockets")) {
            populateRocketsList(data.rockets);
          }
        }
      });
    }, [rockets]);
    */

  return (
    <div className="d-flex flex-column">
      <Weather />
      <div className='d-flex flex-wrap'>
        {rockets.map(rocket => (
          <RocketItem
            key={rocket.id}
            id={rocket.id}
            model={rocket.model}
            mass={rocket.mass}
            description={rocket.payload.description}
            weight={rocket.payload.weight}
            host={rocket.telemetry.host}
            port={rocket.telemetry.port}
            status={rocket.status}
            launched={rocket.timestamps.launched}
            deployed={rocket.timestamps.deployed}
            failed={rocket.timestamps.failed}
            cancelled={rocket.timestamps.cancelled}
            altitude={rocket.altitude}
            speed={rocket.speed}
            acceleration={rocket.acceleration}
            thrust={rocket.thrust}
            temperature={rocket.temperature}
          />
        ))}
      </div>
    </div>
  );
};

export default Rockets;
