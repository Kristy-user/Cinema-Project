const random = (minValue = 1, maxValue = 0) => {
  const lower = Math.min(minValue, maxValue);
  const upper = Math.max(minValue, maxValue);
  return lower + Math.random() * (upper - lower);
};

const randomInt = (minValue = 1, maxValue = 0) => {
  const lower = Math.ceil(Math.min(minValue, maxValue));
  const upper = Math.floor(Math.max(minValue, maxValue));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const randomDate = (date1, date2) => {
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    return new Date(randomInt(date2, date1)).toLocaleDateString();
  } else {
    return new Date(randomInt(date1, date2)).toLocaleDateString();
  }
};

const maxLength = (text) => {
  return (text =
    text.length < 140 ? text : text.split('').join('').slice(0, 137) + '...');
};

export { random, randomInt, randomDate, maxLength };
