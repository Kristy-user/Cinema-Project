// {
//   title: 'Jurassic World: Fallen Kingdom',
//   releseDate: '06-06-2018',
//   plot: 'When the island s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.',
//   poster: 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg',
//   boxOffice: '$417,719,760',
//   rating: 6.3,
//   director: 'J.A. Bayona',
//

let titles = [
  'About Time',
  'Big Fish',
  'Jurassic World: Fallen Kingdom',
  'Just Go with It',
  "Knockin' On Heaven's Door",
  'Seven Pounds',
  'Snatch',
  'The Secret Life of Walter Mitty',
  'The Shawshank Redemption',
  'What Dreams May Come',
];

let director = [
  'Richard Curtis',
  'Tim Burton',
  'J.A. Bayona',
  'Dennis Dugan',
  'Thomas Jahn',
  'Gabriele Muccino',
  'Guy Ritchie',
  'Ben Stiller',
  'Frank Darabont',
  'Vincent Ward',
];

const random = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

const randomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

function randomDate(date1, date2) {
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    return new Date(randomInt(date2, date1)).toLocaleDateString();
  } else {
    return new Date(randomInt(date1, date2)).toLocaleDateString();
  }
}

function randomString(len, charSet) {
  charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
  let randomString = '';
  for (let i = 0; i < len; i++) {
    let randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

const createmockData = (numArrLength) => {
  let result = [...Array(numArrLength).keys()].map(
    (item, index) =>
      (item = {
        titles: titles[index],
        releseDate: randomDate('01/01/1990', '01/01/2021'),
        plot: randomString(50),
        poster: `./images/posters/${index + 1}.jpg`,
        boxOffice: randomInt(300000000, 600000000),
        rating: random(1, 10).toFixed(1),
        director: director[index],
      })
  );
  return result;
};
const filmList = document.querySelector('.film-list');

function getFilmsCards(n) {
  const films = createmockData(n);
  const template = document.querySelector('#card-template');
  films.forEach((obj) => {
    let cloneDiv = template.content.cloneNode(true);
    cloneDiv.querySelector('.card-header__title').textContent = obj.titles;
    cloneDiv.querySelector('.card-header__image').src = obj.poster;
    cloneDiv.querySelector('.film-info__rating :last-child').textContent =
      obj.rating;
    cloneDiv.querySelector('.film-info__plot :last-child').textContent =
      obj.plot;
    cloneDiv.querySelector('.film-info__release-date :last-child').textContent =
      obj.releseDate;
    cloneDiv.querySelector('.film-info__director :last-child').textContent =
      obj.director;
    cloneDiv.querySelector(
      '.film-info__box-office :last-child'
    ).textContent = `$${obj.boxOffice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    filmList.appendChild(cloneDiv);
  });
}

getFilmsCards(10);
