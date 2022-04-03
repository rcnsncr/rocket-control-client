import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; 


function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('first rendered');
  });
  return <App tab="home" />
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);
