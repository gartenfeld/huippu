import rawData from '../data/bot_data.json';
import transform from '../utils/transformData'

const columns = transform(rawData);

const labels = {
  'total': 'Total',
  'bot_only': 'Bot Only',
  'bot_agent': 'Bot & Agent',
  'agent_only': 'Agent Only'
};

const chartData = {
  x: 'date',
  columns: columns,
  types: {
    'total': 'spline',
    'bot_only': 'area-spline',
    'bot_agent': 'area-spline',
    'agent_only': 'area-spline'
  },
  groups: [
    ['bot_only', 'bot_agent', 'agent_only']
  ],
  names: labels
};

const timeSeriesConfig = {
  x: {
    type: 'timeseries',
    tick: {
      // culling: false,
      format: '%Y-%m-%d'
    }
  }
}

export { chartData, timeSeriesConfig };
