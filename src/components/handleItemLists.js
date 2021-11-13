import { main, form, result } from '../utils/dom.js';
import { createItemRows } from '../utils/template.js';

export default function HandleItemLists({ onSubmit, onDeleteBtnClick }) {
  this.state = [];

  this.setState = nextState => {
    this.state = nextState;
    console.log(this.state);
    this.render();
  };

  this.render = () => {
    const itemRowsTemplate = createItemRows(this.state);
    result.innerHTML = itemRowsTemplate;
  };

  form.addEventListener('submit', onSubmit);

  main.addEventListener('click', onDeleteBtnClick);
  //itemLists를  map을 통해서 순회하면서 template으로 바꿔라
}
