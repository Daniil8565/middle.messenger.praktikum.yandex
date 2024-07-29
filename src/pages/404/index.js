import H1 from '../../components/H1/index.js';
import description from '../../components/description/index.js';
import Link from '../../components/link/index.js';
import Index404 from './Index404/index.js';

const h1 = new H1('h1', {
  title: '404',
});

const data = new description('p', {
  title: 'Не туда попали',
});

const link = new Link('a', {
  url: '../index.html',
  title: 'Назад к чатам',
});

const page = new Index404('div', {
  H1: h1,
  description: data,
  Link: link,
});

export default page;
