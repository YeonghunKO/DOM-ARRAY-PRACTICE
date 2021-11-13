import HandleItemLists from './components/handleItemLists.js';
import HandleButtons from './components/handleButtons.js';

import { item, price, result } from './utils/dom.js';
import { totalTemplate } from './utils/template.js';

import { getItem, setItem } from './utils/storage.js';

import { LOCAL_STORAGE_KEYWORD } from './utils/constant.js';
import { isValidate } from './utils/validate.js';

export default function App() {
  this.state = [];

  const handleItemLists = new HandleItemLists({
    initialState: this.state,

    onSubmit: e => {
      e.preventDefault();
      if (item.value && price.value) {
        if (result.querySelector('.total')) {
          onShowOriginalItemBtn();
        }
        this.setState([
          ...this.state,
          { name: item.value, price: parseInt(price.value) },
        ]);
        item.value = '';
        price.value = '';
        item.focus();
      }
    },

    onDeleteBtnClick: e => {
      const selectedItemEle = e.target.closest('div.item');
      const { nodeName } = e.target;

      if (nodeName === 'BUTTON') {
        if (selectedItemEle) {
          result.removeChild(selectedItemEle);
          const filteredItemLists = this.state.filter(
            item => item.name !== selectedItemEle.classList[1]
          );
          this.setState(filteredItemLists);
        }
      }
    },
  });

  const onShowOriginalItemBtn = (nextState = this.state) => {
    this.setState(nextState);
  };

  new HandleButtons({
    onShowOriginalItemBtn,

    onDoubleBtn: () => {
      const doublePriceItems = handleItemLists.state.map(item => {
        return { name: item.name, price: item.price * 2 };
      });
      handleItemLists.setState(doublePriceItems);
    },

    onShowExpensiveBtn: () => {
      const expensiveItems = handleItemLists.state.filter(
        item => item.price >= 10000
      );
      handleItemLists.setState(expensiveItems);
    },

    onSortBtn: () => {
      const copiedItemsForSort = [...handleItemLists.state];
      copiedItemsForSort.sort((a, b) => a.price - b.price);
      handleItemLists.setState(copiedItemsForSort);
    },

    onCalculateEntirePriceBtn: () => {
      if (!result.querySelector('.total')) {
        const totalPrice = handleItemLists.state.reduce((a, c) => {
          return (a += parseInt(c.price));
        }, 0);
        const totalTemplateRow = totalTemplate(totalPrice);
        result.appendChild(totalTemplateRow);
      }
    },

    onClearAllBtn: () => {
      onShowOriginalItemBtn([]);
    },
  });

  this.setState = nextState => {
    if (isValidate(nextState)) {
      this.state = nextState;
      handleItemLists.setState(this.state);
    }
  };

  const populateUI = () => {
    const storedData = getItem(LOCAL_STORAGE_KEYWORD, []);
    onShowOriginalItemBtn(storedData);
  };

  populateUI();

  window.addEventListener('beforeunload', () => {
    setItem(LOCAL_STORAGE_KEYWORD, this.state);
  });
}
