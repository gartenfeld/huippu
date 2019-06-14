const FIELDS = ['date', 'total', 'bot_only', 'bot_agent', 'agent_only'];

const transformData = (rawData) => {
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
  return FIELDS.map(field => {
    return [ field ].concat(columns[field])
  })
};

export default transformData;
