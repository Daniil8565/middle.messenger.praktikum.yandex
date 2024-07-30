import Avatar from '../../components/avatar/index.js';
import ProfileData from '../../components/ProfileData/index.js';
import Button from '../../components/button/index.js';
import IndexProfile from './IndexProfile/index.js';
import Link from '../../components/link/index.js';
import './style.sass';

const avatar = new Avatar('div', {
  attr: { class: 'avatar' },
});

const profileData1 = new ProfileData('div', {
  label: 'Почта',
  description: 'pochta@yandex.ru',
  attr: {
    class: 'section',
  },
});

const profileData2 = new ProfileData('div', {
  label: 'Логин',
  description: 'ivanivanov',
  attr: {
    class: 'section',
  },
});

const profileData3 = new ProfileData('div', {
  label: 'Имя',
  description: 'Иван',
  attr: {
    class: 'section',
  },
});

const profileData4 = new ProfileData('div', {
  label: 'Фамилия',
  description: 'Иванов',
  attr: {
    class: 'section',
  },
});

const profileData5 = new ProfileData('div', {
  label: 'Имя в чате',
  description: 'Иван',
  attr: {
    class: 'section',
  },
});

const profileData6 = new ProfileData('div', {
  label: 'Телефон',
  description: '+7(909) 967 30 30',
  attr: {
    class: 'section',
  },
});

const link1 = new Link('a', {
  attr: {
    href: '../index.html',
    class: 'link',
  },
  title: 'Изменить данные',
});

const link2 = new Link('a', {
  attr: {
    href: '../index.html',
    class: 'link',
  },
  title: 'Изменить пароль',
});

const exit = new Link('a', {
  attr: {
    href: '../index.html',
    class: 'exit',
  },
  title: 'Выйти',
});

const Profile = new IndexProfile('div', {
  avatar: avatar,
  name: 'Иван',
  profileData1: profileData1,
  profileData2: profileData2,
  profileData3: profileData3,
  profileData4: profileData4,
  profileData5: profileData5,
  profileData6: profileData6,
  link1: link1,
  link2: link2,
  exit: exit,
  attr: {
    class: 'content',
  },
});

export default Profile;
