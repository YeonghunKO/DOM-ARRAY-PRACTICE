import { STATE_TYPE, errorMessage } from './constant.js';

const isValidate = state => {
  if (!state) {
    alert(errorMessage('state'));
  }

  for (let item of state) {
    const itemKeyValuePair = Object.entries(item);
    if (itemKeyValuePair.length !== 2) {
      alert(errorMessage('item type'));
    }
    const itemName = itemKeyValuePair[0][0];
    const itemPrice = itemKeyValuePair[1][0];
    const itemNameValue = itemKeyValuePair[0][1];
    const itemPriceValue = itemKeyValuePair[1][1];

    if (!STATE_TYPE[itemName].includes(typeof itemNameValue)) {
      alert(errorMessage(`item name value:${itemNameValue}`));
    }

    if (!STATE_TYPE[itemPrice].includes(typeof itemPriceValue)) {
      alert(errorMessage(`item price value:${itemPriceValue}`));
    }
  }
  return true;
};

export { isValidate };
