const sortingPanel = document.querySelector('.control-panel.sorting');
const ratingButton = sortingPanel.querySelector('#rating');
const dateButton = sortingPanel.querySelector('#releaseDate');
const boxOfficeButton = sortingPanel.querySelector('#boxOffice');

const sortData = (render, data) => {
  sortingPanel.addEventListener('click', (event) => {
    const { target } = event;
    let criterion = event.target.id;
    if (criterion === 'rating') {
      target.classList.add('button_checked');
      dateButton.classList.remove('button_checked');
      boxOfficeButton.classList.remove('button_checked');
      render(
        data.sort((value1, value2) => value2.rating * 10 - value1.rating * 10)
      );
    }
    if (criterion === 'releaseDate') {
      target.classList.add('button_checked');
      ratingButton.classList.remove('button_checked');
      boxOfficeButton.classList.remove('button_checked');
      render(
        data.sort(
          (data1, data2) =>
            new Date(data2.releaseDate).getTime() -
            new Date(data1.releaseDate).getTime()
        )
      );
    }
    if (criterion === 'boxOffice') {
      target.classList.add('button_checked');
      ratingButton.classList.remove('button_checked');
      dateButton.classList.remove('button_checked');
      render(
        data.sort((value1, value2) => value2.boxOffice - value1.boxOffice)
      );
    }
  });
};
export { sortData };
