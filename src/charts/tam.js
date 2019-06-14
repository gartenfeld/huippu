import rawData from '../data/bot_data.json';
import transform from '../utils/transformData'

const columns = transform(rawData);

const params = {
  columns: columns,
  types: {
    'total': 'spline',
    'bot_only': 'area-spline',
    'bot_agent': 'area-spline',
    'agent_only': 'area-spline'
  },
  groups: [
    ['bot_only', 'bot_agent', 'agent_only']
  ]
};

export default params;