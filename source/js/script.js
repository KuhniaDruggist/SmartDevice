'use strict';
var pageHeader = document.querySelector('.page-header');
var headerButton = pageHeader.querySelector('.page-header__button-callback');

var pageBody = document.querySelector('.page-body');

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
  pageBody.classList.add('page-body__popup-open');

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
  pageBody.classList.remove('page-body__popup-open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (popup.classList.contains('popup--open')) {
      popup.classList.remove('popup--open');
      pageBody.classList.remove('page-body__popup-open');
    }
  }
});

popup.addEventListener('click', function (evt) {
  var target = evt.target;

  if (target && target.classList.contains('popup')) {
    popup.classList.remove('popup--open');
    pageBody.classList.remove('page-body__popup-open');
  }
});

var navigation = document.querySelector('.site-nav');
var navigationToggle = navigation.querySelector('.site-nav__button-toggle');
var contacts = document.querySelector('.contacts-footer');
var contactsToggle = contacts.querySelector('.contacts-footer__button-toggle');

navigation.classList.add('site-nav--close');
contacts.classList.add('contacts-footer--close');

navigationToggle.addEventListener('click', function () {
  if (navigation.classList.contains('site-nav--close')) {
    navigation.classList.remove('site-nav--close');
    navigation.classList.add('site-nav--open');
    if (!contacts.classList.contains('contacts-footer--close')) {
      contacts.classList.remove('contacts-footer--open');
      contacts.classList.add('contacts-footer--close');
    }
  } else {
    navigation.classList.remove('site-nav--open');
    navigation.classList.add('site-nav--close');
  }
});

contactsToggle.addEventListener('click', function () {
  if (contacts.classList.contains('contacts-footer--close')) {
    contacts.classList.remove('contacts-footer--close');
    contacts.classList.add('contacts-footer--open');
    if (!navigation.classList.contains('site-nav--close')) {
      navigation.classList.remove('site-nav--open');
      navigation.classList.add('site-nav--close');
    }
  } else {
    contacts.classList.remove('contacts-footer--open');
    contacts.classList.add('contacts-footer--close');
  }
});
