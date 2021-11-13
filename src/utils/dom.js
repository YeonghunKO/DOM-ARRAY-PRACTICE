const main = document.getElementById('main');
const form = document.querySelector('.main__input');
const item = document.querySelector('.main__input__item');
const price = document.querySelector('.main__input__price');

const showOriginalItemsBtn = document.querySelector('.show-items');
const doubleBtn = document.querySelector('.double');
const showExpensiveBtn = document.querySelector('.show-expensive');
const sortBtn = document.querySelector('.sort');
const calculateEntirePriceBtn = document.querySelector('.calculate');
const clearBtn = document.querySelector('.clear');

const result = document.querySelector('.result');

export {
  main,
  form,
  item,
  price,
  result,
  showOriginalItemsBtn,
  doubleBtn,
  showExpensiveBtn,
  sortBtn,
  calculateEntirePriceBtn,
  clearBtn,
};
