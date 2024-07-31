import IndexMessage from './IndexMessage/index.ts';
import ItemMessage from '../../components/itemMessage/index.ts';
import './style.sass';

let item = new ItemMessage('li', {
  header: 'Андрей',
  description: 'Изображение',
  time: '10:49',
  attr: {
    class: 'list__item',
  },
});

let message = new IndexMessage('div', {
  item: item,
  attr: {
    class: 'con',
  },
});

export default message;
