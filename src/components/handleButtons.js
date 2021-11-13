import {
  showOriginalItemsBtn,
  doubleBtn,
  showExpensiveBtn,
  sortBtn,
  calculateEntirePriceBtn,
  clearBtn,
} from '../utils/dom.js';

export default function HandleButtons({
  onShowOriginalItemBtn,
  onDoubleBtn,
  onShowExpensiveBtn,
  onSortBtn,
  onCalculateEntirePriceBtn,
  onClearAllBtn,
}) {
  showOriginalItemsBtn.addEventListener('click', () => onShowOriginalItemBtn());

  doubleBtn.addEventListener('click', onDoubleBtn);

  showExpensiveBtn.addEventListener('click', onShowExpensiveBtn);

  sortBtn.addEventListener('click', onSortBtn);

  calculateEntirePriceBtn.addEventListener('click', onCalculateEntirePriceBtn);

  clearBtn.addEventListener('click', onClearAllBtn);
}

// 버튼을 app으로 다 뺀다음에 관리해주기
