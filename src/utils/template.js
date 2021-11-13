const formatPrice = price => {
  return (
    '₩' +
    parseInt(price)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  );
};

const createElement = tagType => {
  return document.createElement(tagType);
};

const createItemRows = itemLists => {
  const resultLists = itemLists
    .map(
      item => `
    <div class='item ${item.name}'>
      <strong>${item.name}</strong>
      <div>
        <span>${formatPrice(item.price)}</span>
        <button data-id='${item.name}'>❌</button>
      </div>
    </div>
  `
    )
    .join('');
  return resultLists;
};

// const createItemRow = (item, price) => {
//   const divEle = createElement('div');
//   divEle.classList.add('item', `${item}`);
//   divEle.innerHTML = `
//       <strong>${item}</strong>
//       <div>
//         <span>${formatPrice(price)}</span>
//         <button data-id='${item}'>❌</button>
//       </div>
//       `;
//   return divEle;
// };

const totalTemplate = total => {
  const divEle = createElement('div');
  divEle.classList.add('total');
  divEle.innerHTML = `
  <h3>Total: <strong>${formatPrice(total)}</strong></h3>
  `;
  return divEle;
};

export { createElement, createItemRows, totalTemplate };
