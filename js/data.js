import { titles, director, description } from './mock-data.js';
import { random, randomDate, randomInt } from './utils.js';

const createmockData = (numArrLength) => {
  let result = [...Array(numArrLength).keys()].map(
    (item, index) =>
      (item = {
        titles: titles[index],
        releseDate: randomDate('01-01-1990', '01-01-2021') || '-',
        plot: description[randomInt(0, description.length - 1)] || '-',
        poster: `./images/posters/${index + 1}.jpg`,
        boxOffice: randomInt(300000000, 600000000) || 0,
        rating: random(1, 10).toFixed(1) || 0,
        director: director[index] || '-',
      })
  );
  return result;
};
export { createmockData };
