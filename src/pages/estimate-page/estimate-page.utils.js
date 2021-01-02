export const handleSelect = (id, { subtitle, options }) => {
  if (subtitle === undefined) return;

  switch (subtitle) {
    case "Select one.":
      options.forEach((item, i) => (item.selected = id === i));
      break;
    default:
      options[id].selected = !options[id].selected;
      break;
  }
};

export const checkActive = (options) => {
  let active = false;

  options.forEach(item => {
    if (item.selected)
      active = true;
  })

  return !active;
};

export const checkSelected = (servicesOptions) => (
  servicesOptions.reduce((acc, item) => {
    if (item.subtitle === undefined) return acc;
    for (let x = 0; x < item.options.length; x++) {
        if (item.options[x].selected) return acc + 1;
    }
    return acc;
  }, 0)
);
