import rawData from '../data/bot_data.json';
import transform from '../utils/transformData'

const columns = transform(rawData);

const labels = {
  'total': 'Total',
  'bot_only': 'Bot Only',
  'bot_agent': 'Bot & Agent',
  'agent_only': 'Agent Only'
};

const onClickDot = (d, el) => {
  if (d.id === 'total') {
    return;
  }
  let instruction = d.note ? 'Comments:' : 'Please add comments.'
  let note = window.prompt(instruction, d.note || '');
  if (note === null) {
    return;
  }
  d.note = note;
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
  names: labels,
  onclick: onClickDot
};

const timeSeriesConfig = {
  x: {
    type: 'timeseries',
    tick: {
      format: '%Y-%m-%d'
    }
  }
}

const pointConfig = {
  r: d => {
    return d.note ? 8 : 2.5;
  }
};

export { chartData, timeSeriesConfig, pointConfig };
