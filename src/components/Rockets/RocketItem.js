import React, { useContext } from 'react';


import { RocketsContext } from '../../context/rockets-context';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Info from '../UI/Info';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const RocketItem = props => {

  const {launchRocket, deployRocket, cancelRocket} = useContext(RocketsContext);

  return (
    <div className='px-2 py-4 mx-auto'>
      <Card style={{ width: '28rem' }}>
        <Card.Header>
            <Container>
              <Row>
                <Col xs={2}><Info description = {props.description} /></Col>
                <Col xs={5}><Card.Header as="h6">{props.id}</Card.Header></Col>
                <Col xs={5}><Card.Header as="h6">{props.status}</Card.Header></Col>
              </Row>
            </Container>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr align='center'>
                <th>Model</th>
                <th>Mass</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr align='center'>
                <td>{props.model}</td>
                <td>{props.mass}</td>
                <td>{props.weight}</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Altitude</td>
                <td>{props.altitude}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{props.speed}</td>
              </tr>
              <tr>
                <td>Acceleration</td>
                <td>{props.acceleration}</td>
              </tr>
              <tr>
                <td>Thrust</td>
                <td>{props.thrust}</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>{props.temperature}</td>
              </tr>
            </tbody>
          </Table>
          <div className='px-1 py-1 mx-auto'>
            <Container>
              <Row>
                <Col>
                  <ButtonGroup className="mb-2">
                    <Button variant="warning" onClick={() => deployRocket(props)}>Deploy Rocket</Button>
                    <Button variant="primary" onClick={() => launchRocket(props)}>Launch Rocket</Button>
                    <Button variant="danger" onClick={() => cancelRocket(props)}>Cancel Launch</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Container>
          </div>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Launched</td>
                <td>{props.launched}</td>
              </tr>
              <tr>
                <td>Deployed</td>
                <td>{props.deployed}</td>
              </tr>
              <tr>
                <td>Failed</td>
                <td>{props.failed}</td>
              </tr>
              <tr>
                <td>Cancelled</td>
                <td>{props.cancelled}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Text>HOST/PORT: {props.host}/{props.port}</Card.Text>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default RocketItem;
