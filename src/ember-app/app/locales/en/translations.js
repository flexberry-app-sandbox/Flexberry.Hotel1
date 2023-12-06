import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHotelГостиLForm from './forms/i-i-s-hotel-гости-l';
import IISHotelДолжностьLForm from './forms/i-i-s-hotel-должность-l';
import IISHotelДоступLForm from './forms/i-i-s-hotel-доступ-l';
import IISHotelЗаписьГостяLForm from './forms/i-i-s-hotel-запись-гостя-l';
import IISHotelКомнатаLForm from './forms/i-i-s-hotel-комната-l';
import IISHotelОтельLForm from './forms/i-i-s-hotel-отель-l';
import IISHotelСотрудникLForm from './forms/i-i-s-hotel-сотрудник-l';
import IISHotelГостиEForm from './forms/i-i-s-hotel-гости-e';
import IISHotelДолжностьEForm from './forms/i-i-s-hotel-должность-e';
import IISHotelДоступEForm from './forms/i-i-s-hotel-доступ-e';
import IISHotelЗаписьГостяEForm from './forms/i-i-s-hotel-запись-гостя-e';
import IISHotelКомнатаEForm from './forms/i-i-s-hotel-комната-e';
import IISHotelОтельEForm from './forms/i-i-s-hotel-отель-e';
import IISHotelСотрудникEForm from './forms/i-i-s-hotel-сотрудник-e';
import IISHotelГостиModel from './models/i-i-s-hotel-гости';
import IISHotelДолжностьModel from './models/i-i-s-hotel-должность';
import IISHotelДоступModel from './models/i-i-s-hotel-доступ';
import IISHotelЗаписьГостяModel from './models/i-i-s-hotel-запись-гостя';
import IISHotelКомнатаModel from './models/i-i-s-hotel-комната';
import IISHotelОтельModel from './models/i-i-s-hotel-отель';
import IISHotelРегистрЗаписиModel from './models/i-i-s-hotel-регистр-записи';
import IISHotelСотрудникModel from './models/i-i-s-hotel-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-hotel-гости': IISHotelГостиModel,
    'i-i-s-hotel-должность': IISHotelДолжностьModel,
    'i-i-s-hotel-доступ': IISHotelДоступModel,
    'i-i-s-hotel-запись-гостя': IISHotelЗаписьГостяModel,
    'i-i-s-hotel-комната': IISHotelКомнатаModel,
    'i-i-s-hotel-отель': IISHotelОтельModel,
    'i-i-s-hotel-регистр-записи': IISHotelРегистрЗаписиModel,
    'i-i-s-hotel-сотрудник': IISHotelСотрудникModel
  },

  'application-name': 'Hotel',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Hotel',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Hotel',
          title: 'Hotel'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        hotel: {
          caption: 'Hotel',
          title: 'Hotel',
          'i-i-s-hotel-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-hotel-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-hotel-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-hotel-доступ-l': {
            caption: 'Доступ',
            title: ''
          },
          'i-i-s-hotel-запись-гостя-l': {
            caption: 'Запись гостя',
            title: ''
          },
          'i-i-s-hotel-гости-l': {
            caption: 'Гости',
            title: ''
          },
          'i-i-s-hotel-отель-l': {
            caption: 'Отель',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-hotel-гости-l': IISHotelГостиLForm,
    'i-i-s-hotel-должность-l': IISHotelДолжностьLForm,
    'i-i-s-hotel-доступ-l': IISHotelДоступLForm,
    'i-i-s-hotel-запись-гостя-l': IISHotelЗаписьГостяLForm,
    'i-i-s-hotel-комната-l': IISHotelКомнатаLForm,
    'i-i-s-hotel-отель-l': IISHotelОтельLForm,
    'i-i-s-hotel-сотрудник-l': IISHotelСотрудникLForm,
    'i-i-s-hotel-гости-e': IISHotelГостиEForm,
    'i-i-s-hotel-должность-e': IISHotelДолжностьEForm,
    'i-i-s-hotel-доступ-e': IISHotelДоступEForm,
    'i-i-s-hotel-запись-гостя-e': IISHotelЗаписьГостяEForm,
    'i-i-s-hotel-комната-e': IISHotelКомнатаEForm,
    'i-i-s-hotel-отель-e': IISHotelОтельEForm,
    'i-i-s-hotel-сотрудник-e': IISHotelСотрудникEForm
  },

});

export default translations;
