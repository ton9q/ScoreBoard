import { getNumberFromString } from '../constants.js';

function changeTableTitlePosition() {
  const header = document.getElementById('table__header');

  const headerElem = document.querySelector('header');
  const heightHeader = getNumberFromString(
    window.getComputedStyle(headerElem).getPropertyValue('height')
  );
  const mainBoxes = document.querySelector('.main__boxes');
  const heightMainBoxes = getNumberFromString(
    window.getComputedStyle(mainBoxes).getPropertyValue('height')
  );

  if (window.pageYOffset > heightHeader + heightMainBoxes) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

function scrollingX(table) {
  const title = document.querySelector('.title');

  if (title.classList.contains('sticky')) {
    title.style.left = `${-table.scrollLeft}px`;
  }
}

class ListenerForTable {
  static listenScrollY() {
    window.onscroll = function() {
      changeTableTitlePosition();
    };
  }

  static listenScrollX() {
    const table = document.getElementById('main__table');
    table.onscroll = function() {
      scrollingX(table);
    };
  }
}

export default ListenerForTable;
