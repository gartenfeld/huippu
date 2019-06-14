import rawData from '../data/bot_data.json';
import transform from '../utils/transformData'

const columns = transform(rawData);

const params = {
  columns: columns
};

export default params;