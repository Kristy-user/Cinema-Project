import { SORTING_BUTTONS } from './sorting.js';
const INPUT_SEARCH = document.querySelector('.search__input');

const initSearch = (render, data) => {
  INPUT_SEARCH.addEventListener('keyup', (event) => {
    const inputValue = event.target.value;
    if (inputValue) {
      SORTING_BUTTONS.forEach((item) =>
        item.classList.remove('button_checked')
      );
      render(
        data.filter((data) =>
          data.Title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
    if (!inputValue) {
      return render(data);
    }
  });
};
export { initSearch, INPUT_SEARCH };
