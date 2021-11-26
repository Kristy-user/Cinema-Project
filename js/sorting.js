const sortingButtons = document.querySelectorAll('.sorting .button');
const sortingPanel = document.querySelector('.control-panel.sorting');

const sortData = (render, data) => {
  sortingPanel.addEventListener('click', (event) => {
    const { target } = event;
    let criterion = event.target.id;
    if (criterion === 'rating') {
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      render(
        data.sort((value1, value2) => value2.rating * 10 - value1.rating * 10)
      );
    }
    if (criterion === 'releaseDate') {
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      render(
        data.sort(
          (data1, data2) =>
            new Date(data2.releaseDate).getTime() -
            new Date(data1.releaseDate).getTime()
        )
      );
    }
    if (criterion === 'boxOffice') {
      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');

      render(
        data.sort((value1, value2) => value2.boxOffice - value1.boxOffice)
      );
    }
  });
};
export { sortData };
