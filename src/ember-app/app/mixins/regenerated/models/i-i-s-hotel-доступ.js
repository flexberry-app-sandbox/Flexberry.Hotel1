import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступ: DS.attr('string'),
  кодДоступа: DS.attr('number'),
  комната: DS.belongsTo('i-i-s-hotel-комната', { inverse: null, async: false }),
  регистрЗаписи: DS.hasMany('i-i-s-hotel-регистр-записи', { inverse: 'доступ', async: false })
});

export let ValidationRules = {
  доступ: {
    descriptionKey: 'models.i-i-s-hotel-доступ.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДоступа: {
    descriptionKey: 'models.i-i-s-hotel-доступ.validations.кодДоступа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-hotel-доступ.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистрЗаписи: {
    descriptionKey: 'models.i-i-s-hotel-доступ.validations.регистрЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоступE', 'i-i-s-hotel-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    комната: belongsTo('i-i-s-hotel-комната', 'Комната', {
      класс: attr('Класс', { index: 3, hidden: true }),
      кодКомнаты: attr('Код комнаты', { index: 4, hidden: true }),
      колвоМест: attr('Колво мест', { index: 5, hidden: true }),
      стоимость: attr('Стоимость', { index: 6, hidden: true })
    }, { index: 2, displayMemberPath: 'класс' }),
    регистрЗаписи: hasMany('i-i-s-hotel-регистр-записи', 'Регистр записи', {
      кодРегистра: attr('Код регистра', { index: 0 }),
      датаЗаселения: attr('Дата заселения', { index: 6 }),
      датаВыезда: attr('Дата выезда', { index: 7 })
    })
  });

  modelClass.defineProjection('ДоступL', 'i-i-s-hotel-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    комната: belongsTo('i-i-s-hotel-комната', 'Класс', {
      класс: attr('Класс', { index: 2 }),
      кодКомнаты: attr('Код комнаты', { index: 3 }),
      колвоМест: attr('колво мест', { index: 4 }),
      стоимость: attr('Стоимость', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
