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

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomToFixed = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(1);

function randomDate(date1, date2) {
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();
  if (date1 > date2) {
    return new Date(random(date2, date1)).toLocaleDateString();
  } else {
    return new Date(random(date1, date2)).toLocaleDateString();
  }
}

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

const result = [...Array(10).keys()].map((id) => ({
  titles: titles[id],
  releseDate: randomDate('01/01/1990', '01/01/2021'),
  plot: randomString(100),
  poster: `./images/posters/${id + 1}.jpg`,
  boxOffice:
    '$' +
    random(300000000, 600000000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
  rating: randomToFixed(1, 10),
  director: director[id],
}));

console.log(result);
