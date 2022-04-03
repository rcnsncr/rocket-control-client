import React, {} from 'react';

import Table from 'react-bootstrap/Table'
  
const WeatherItem = props => {

  return (
    <div className='d-flex'>
      <div className='px-1 py-1 mx-auto'>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Direction</td>
              <td>{props.direction}</td>
            </tr>
            <tr>
              <td>Angle</td>
              <td>{props.angle}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{props.speed}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='px-1 py-1 mx-auto'>        
        <Table striped bordered hover>
          <thead>
            <tr align='center'>
              <th>Probability</th>
              <th>Rain</th>
              <th>Snow</th>
              <th>Sleet</th>
              <th>Hail</th>
            </tr>
          </thead>
          <tbody>
            <tr align='center'>
              <td>{props.probability}</td>
              <td>{props.rain+''}</td>
              <td>{props.snow+''}</td>
              <td>{props.sleet+''}</td>
              <td>{props.hail+''}</td>
            </tr>
            <tr align='right'>
              <td><b>Time</b></td>
              <td colSpan='4'>{props.time}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='px-1 py-1 mx-auto'>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Temperature</td>
              <td>{props.temperature}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{props.humidity}</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{props.pressure}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};  

export default WeatherItem;
