const API_URL = 'https://fe08-films.herokuapp.com';

function getTokenData() {
  return fetch(`${API_URL}/auth`, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => data.token);
}

function getFilmsData(token) {
  return fetch(`${API_URL}/films`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Autorization: `Beare ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        getTokenData();
      }
      if (response.ok) {
        return response;
      }
    })
    .then((response) => response.json())
    .then((data) => {
      return data.films;
    })
    .catch((error) => console.log('error', error));
}

export { getTokenData, getFilmsData };
