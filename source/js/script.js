'use strict';
var pageHeader = document.querySelector('.page-header');
var headerButton = pageHeader.querySelector('.page-header__button-callback');

var popup = document.querySelector('.popup');
var popupButton = popup.querySelector('.popup__button');
var form = popup.querySelector('form');
var firstName = popup.querySelector('[name=name]');
var phone = popup.querySelector('[name=phone]');
// var question = popup.querySelector('[name=question]');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('firstname');
} catch (err) {
  isStorageSupport = false;
}


headerButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--close');
  popup.classList.add('popup--open');

  if (storage) {
    firstName.value = storage;
    phone.focus();
  } else {
    firstName.focus();
  }
});

form.addEventListener('submit', function (evt) {
  if (firstName.value || phone.value) {
    evt.preventDefault();
    if (isStorageSupport) {
      localStorage.setItem('firstName', firstName.value);
    }
  }
});

popupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--open');
  popup.classList.add('popup--close');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (!popup.classList.contains('popup--close')) {
      popup.classList.remove('popup--open');
      popup.classList.add('popup--close');
    }
  }
});

var navigation = document.querySelector('.site-nav');
var navigationToggle = navigation.querySelector('.site-nav__button--toggle');
var contacts = document.querySelector('.contacts-footer');
var contactsToggle = contacts.querySelector('.contacts-footer__button--toggle');

navigation.classList.add('site-nav--close');
contacts.classList.add('contacts-footer--close');

navigationToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (navigation.classList.contains('site-nav--close')) {
    navigation.classList.remove('site-nav--close');
    navigation.classList.add('site-nav--open');
  } else {
    navigation.classList.add('site-nav--close');
    navigation.classList.remove('site-nav--open');
  }
});

contactsToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (contacts.classList.contains('contacts-footer--close')) {
    contacts.classList.remove('contacts-footer--close');
    contacts.classList.add('contacts-footer--open');
  } else {
    contacts.classList.add('contacts-footer--close');
    contacts.classList.remove('contacts-footer--open');
  }
});
