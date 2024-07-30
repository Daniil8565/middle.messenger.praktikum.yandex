import Header from '../../components/Header/index.js';
import description from '../../components/description/index.js';
import Link from '../../components/link/index.js';
import Index404 from './Index404/index.js';
import './404.sass';

const h1 = new Header('h1', {
  title: '404',
  attr: {
    class: 'header',
  },
});

const data = new description('p', {
  title: 'Не туда попали',
  attr: {
    class: 'descriptionError',
  },
});

const link = new Link('a', {
  attr: {
    href: '../index.html',
    class: 'linkExit',
  },
  title: 'Назад к чатам',
});

const page = new Index404('div', {
  H1: h1,
  description: data,
  Link: link,
  attr: {
    class: 'content',
  },
});

export default page;
