import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  класс: DS.attr('string'),
  кодКомнаты: DS.attr('number'),
  колвоМест: DS.attr('number'),
  стоимость: DS.attr('number'),
  отель: DS.belongsTo('i-i-s-hotel-отель', { inverse: null, async: false })
});

export let ValidationRules = {
  класс: {
    descriptionKey: 'models.i-i-s-hotel-комната.validations.класс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКомнаты: {
    descriptionKey: 'models.i-i-s-hotel-комната.validations.кодКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоМест: {
    descriptionKey: 'models.i-i-s-hotel-комната.validations.колвоМест.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-hotel-комната.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отель: {
    descriptionKey: 'models.i-i-s-hotel-комната.validations.отель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-hotel-комната', {
    кодКомнаты: attr('Код комнаты', { index: 0 }),
    класс: attr('Класс', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    колвоМест: attr('Колво мест', { index: 3 }),
    отель: belongsTo('i-i-s-hotel-отель', 'Отель', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-hotel-комната', {
    кодКомнаты: attr('Код комнаты', { index: 0 }),
    класс: attr('Класс', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    колвоМест: attr('Колво мест', { index: 3 }),
    отель: belongsTo('i-i-s-hotel-отель', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
