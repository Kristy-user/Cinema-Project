const mainScene = document.querySelector('.film-list');
const loaderDiv = document.createElement('div');
loaderDiv.classList.add('loader');

const showLoader = () => mainScene.before(loaderDiv);
const removeLoader = () => loaderDiv.remove();

export { showLoader, removeLoader };
