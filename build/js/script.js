'use strict';
var pageHeader = document.querySelector('.page-header');
var headerButton = pageHeader.querySelector('.page-header__button-callback');

var popup = document.querySelector('.popup');
var popupButton = popup.querySelector('.popup__button');
var form = popup.querySelector('form');
var firstName = popup.querySelector('[name=name]');
var phone = popup.querySelector('[name=phone]');
var question = popup.querySelector('[name=question]');

var isStorageSupport = true;
var storage = {
  name: '',
  phone: '',
  question: ''
};

try {
  storage.name = localStorage.getItem('firstName');
  storage.phone = localStorage.getItem('phone');
  storage.question = localStorage.getItem('question');
} catch (err) {
  isStorageSupport = false;
}

headerButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--open');

  if (storage.name) {
    firstName.value = storage.name;
    phone.focus();
  } else {
    firstName.focus();
  }
});

form.addEventListener('submit', function () {
  if (isStorageSupport) {
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('question', question.value);
  }
});

popupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (popup.classList.contains('popup--open')) {
      popup.classList.remove('popup--open');
    }
  }
});

popup.addEventListener('click', function (evt) {
  var target = evt.target;

  if (target && target.classList.contains('popup')) {
    popup.classList.remove('popup--open');
  }
});

var navigation = document.querySelector('.site-nav');
var navigationToggle = navigation.querySelector('.site-nav__button--toggle');
var contacts = document.querySelector('.contacts-footer');
var contactsToggle = contacts.querySelector('.contacts-footer__button--toggle');

navigation.classList.add('site-nav--close');
contacts.classList.add('contacts-footer--close');

function switchContent(contentBlock, classOpened, classClosed) {
  if (contentBlock.classList.contains(classOpened)) {
    contentBlock.classList.remove(classOpened);
    contentBlock.classList.add(classClosed);
  } else {
    contentBlock.classList.add(classOpened);
    contentBlock.classList.remove(classClosed);
  }
}

navigationToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  switchContent(navigation, 'site-nav--close', 'site-nav--open');
});

contactsToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  switchContent(contacts, 'contacts-footer--close', 'contacts-footer--open');
});
