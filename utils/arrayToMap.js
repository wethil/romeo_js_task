const arrayToMap = (array, key = "id") =>
  Object.assign({}, ...array.map((o) => ({ [o[key]]: o })));

export default arrayToMap;
