import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import WeatherItem from '../components/Weather/WeatherItem';

const ENDPOINT = "http://localhost:3000";
const delayData = 5000;

const Weather = props => {

    const [weather, setWeather] = useState({
        "temperature": -12.38291498429811,
        "humidity": 0.6058072143204902,
        "pressure": 1057.0272771062175,
        "precipitation": {
            "probability": 0.6995769965860502,
            "rain": true,
            "snow": false,
            "sleet": false,
            "hail": false
        },
        "time": "2022-04-03T15:20:20.151664",
        "wind": {
            "direction": "N",
            "angle": 62.07399036025326,
            "speed": 9.051788466259069
        }
    });

    let loadDatas = async () => {
        try {
          const socket = socketIOClient(ENDPOINT);
          socket.on("r-data", data => {
            if (data != null) {
                var temp = {};
                temp = data;
                if (temp.hasOwnProperty("weather")) {
                    setWeather(data.weather);
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
                if (temp.hasOwnProperty("weather")) {
                    setWeather(data.weather);
                }
            }
        });
    }, [weather]);
    */

    return (
        <>
            <WeatherItem
                temperature={weather.temperature}
                humidity={weather.humidity}
                pressure={weather.pressure}
                probability={weather.precipitation.probability}
                rain={weather.precipitation.rain}
                snow={weather.precipitation.snow}
                sleet={weather.precipitation.sleet}
                hail={weather.precipitation.hail}
                time={weather.time}
                direction={weather.wind.direction}
                angle={weather.wind.angle}
                speed={weather.wind.speed}
            />
        </>
    );
};

export default Weather;
