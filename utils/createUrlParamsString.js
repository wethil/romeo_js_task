const createUrlParamsString = (params, prefix) => {
  let query = new URLSearchParams(params).toString();
  if (prefix) {
    query = `${prefix}?${query}`;
  }
  return query;
};

export default createUrlParamsString;
