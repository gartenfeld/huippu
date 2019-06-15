const FIELDS = ['date', 'total', 'bot_only', 'bot_agent', 'agent_only'];

const transformData = (rawData) => {
  // Option 1: Lodash transpose
  // const headers = Object.keys(rawData[0]);
  // const dataRows = rawData.map(day => _.values(day));
  // return _.zip(headers, ...dataRows);

  // Option 2: Map each key
  // return Object.keys(rawData[0]).map(columnKey => {
  //   return [columnKey].concat(rawData.map(d => d[columnKey]));
  // });

  // Option 3: 1 x n
  // Get the number of days
  const size = rawData.length;
  const columns = {};
  // Initialise arrays for daily values
  FIELDS.forEach(field => {
    columns[field] = Array(size);
  });
  // Map daily values to separate vectors
  rawData.forEach((day, index) => {
    FIELDS.forEach(field => {
      columns[field][index] = day[field] || 0;
    })
  });
  // Return an array of columns with headers
  return FIELDS.map(header => {
    return [ header, ...columns[header] ]
  })
};

export default transformData;
