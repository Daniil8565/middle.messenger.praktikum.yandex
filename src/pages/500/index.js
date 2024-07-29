import H1 from '../../components/H1/index.js';
import description from '../../components/description/index.js';
import Link from '../../components/link/index.js';
import Index500 from './Index500/index.js';

const h1 = new H1('h1', {
  title: '500',
});

const data = new description('p', {
  title: 'Не туда попали',
});

const link = new Link('a', {
  url: '../index.html',
  title: 'Назад к чатам',
});

const index500 = new Index500('div', {
  H1: h1,
  description: data,
  Link: link,
});

export default index500;
