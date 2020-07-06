export const validation = (value, rules) => {
  const arr = rules.map((rule) => {
    return rule(value);
  });
  if (!arr.some((v) => v !== '')) {
    return [];
  } else {
    return arr.filter((v) => !!v);
  }
};
