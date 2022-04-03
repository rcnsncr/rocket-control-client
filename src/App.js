import React from 'react';
import Layout from './components/UI/Layout';
import Rockets from './containers/Rockets';
import RocketsProvider from './context/rockets-context';

const App = props => {
  return (
    <Layout>
      <RocketsProvider>
        <Rockets />
      </RocketsProvider>
    </Layout>
  );
};

export default App;
