function arrayToString(arr, key) {
  return arr.reduce(
    (acc, v, i) => `${acc}${i ? '&' : ''}${key}[${i}]=${v}`,
    ''
  );
}

function getKeysObjectToArray(obj, arr = []) {
  let value: any;
  Object.entries(obj).forEach(([k, v], i) => {
    if (typeof v === 'object') arr.concat(getKeysObjectToArray(v, arr).arrKeys);
    else value = v;
    arr.push(k);
  });
  return { arrKeys: arr, value };
}

function objectToString({ arrKeys, value }, key) {
  const path = arrKeys.reverse().reduce((acc, v) => `${acc}[${v}]`, '');
  return `${key}${path}=${value}`;
}

export function queryStringify(data): string {
  let searchParams = '';
  if (typeof data === 'object') {
    const keys = Object.keys(data);
    if (data && keys.length !== 0) {
      keys.forEach((key, i) => {
        let params = '';
        if (Array.isArray(data[key])) {
          params += arrayToString(data[key], key);
        } else if (typeof data[key] === 'object') {
          params += objectToString(getKeysObjectToArray(data[key]), key);
        } else {
          params += `${key}=${data[key].toString()}`;
        }
        searchParams += `${i ? '&' : ''}${params}`;
      });
      return `${searchParams.toString()}`;
    }
  } else {
    throw new Error('no obj');
  }
  return searchParams;
}
