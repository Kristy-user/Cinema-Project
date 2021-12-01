const inputSearch = document.querySelector('.search__input');
const sortingButtons = document.querySelectorAll('.sorting .button');
const initSearch = (render, data) => {
  inputSearch.addEventListener('keyup', (event) => {
    const inputValue = event.target.value;
    if (inputValue) {
      render(
        data.filter((data) =>
          data.titles.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
    }
    if (!inputValue) {
      return render(data);
    }
  });
};
export { initSearch, sortingButtons, inputSearch };
