import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Hotel',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Hotel',
          title: 'Hotel'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
