import React from 'react';
import Chart from 'react-c3js';
import './App.css';
import 'c3/c3.css';
 
import { chartData, timeSeriesConfig, pointConfig } from './charts/tam'

function App() {
  return (
    <Chart data={ chartData } axis={ timeSeriesConfig } point={ pointConfig } />
  );
}

export default App;
