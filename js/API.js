let apiUrl = 'https://fe08-films.herokuapp.com';

function getTokenData() {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiUrl}/auth`);
  xhr.onload = saveToken;

  xhr.send();
}

function saveToken() {
  sessionStorage.setItem('token', JSON.parse(this.responseText).token);
  console.log(sessionStorage.getItem('token'));
}

getTokenData();

function getFilmsData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${apiUrl}/films`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader(
    'Authorization',
    `Beare ${sessionStorage.getItem('token')}`
  );
  console.log(xhr.readyState);
  xhr.onreadystatechange = () => {
    if (xhr.status === 401) {
      getTokenData();
    }
    if (xhr.status === 200 && xhr.readyState === 4) {
      const jsonData = JSON.parse(xhr.responseText);
      console.log(jsonData);
    }
  };
  xhr.send();
}

getFilmsData();

export { getTokenData, getFilmsData };
