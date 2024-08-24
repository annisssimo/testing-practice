const analyzeArray = (array) => {
  let result = {
    average: array.reduce((acc, value) => acc + value) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return result;
};

module.exports = analyzeArray;
