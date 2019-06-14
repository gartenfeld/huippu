import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
 
import chartParams from './charts/tam'

function App() {
  return (
    <C3Chart data={ chartParams } />
  );
}

export default App;
