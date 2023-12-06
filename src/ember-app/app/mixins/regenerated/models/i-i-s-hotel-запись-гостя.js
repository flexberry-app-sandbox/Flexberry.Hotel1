import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  гости: DS.belongsTo('i-i-s-hotel-гости', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-hotel-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-hotel-запись-гостя.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-hotel-запись-гостя.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-hotel-запись-гостя.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-hotel-запись-гостя.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьГостяE', 'i-i-s-hotel-запись-гостя', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    гости: belongsTo('i-i-s-hotel-гости', 'Гости', {
      имя: attr('Имя', { index: 2, hidden: true }),
      фамилия: attr('Фамилия', { index: 3, hidden: true }),
      отчество: attr('Отчество', { index: 4, hidden: true })
    }, { index: 1, displayMemberPath: 'имя' }),
    сотрудник: belongsTo('i-i-s-hotel-сотрудник', 'Сотрудник', {
      кодCотрудника: attr('Код сотрудника', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'имя' }),
    комментарий: attr('Комментарий', { index: 7 })
  });

  modelClass.defineProjection('ЗаписьГостяL', 'i-i-s-hotel-запись-гостя', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    гости: belongsTo('i-i-s-hotel-гости', 'Имя', {
      имя: attr('Имя', { index: 1 }),
      фамилия: attr('Фамилия', { index: 2 }),
      отчество: attr('Отчество', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-hotel-сотрудник', 'Код Сотрудника', {
      кодCотрудника: attr('Код Сотрудника', { index: 4 })
    }, { index: -1, hidden: true }),
    комментарий: attr('Комментарий', { index: 5 })
  });
};
