export const getCost = (services) => services.reduce((acc, item, i) => {
  return i === services.length - 1 ? acc * item.cost : acc + item.cost;
}, 0);

export const getSelectedOptions = (services) => services.reduce((acc, item) => {
  const _acc = item.options.reduce(
    (acc, { selected, title, cost, prefix, suffix }) =>
      selected ? [...acc, { title, cost, prefix, suffix }] : acc,
    []
  );

  return [...acc, ..._acc];
}, []);