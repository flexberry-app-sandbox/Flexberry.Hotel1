import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hotel-должность', 'Unit | Model | i-i-s-hotel-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-hotel-гости',
    'model:i-i-s-hotel-должность',
    'model:i-i-s-hotel-доступ',
    'model:i-i-s-hotel-запись-гостя',
    'model:i-i-s-hotel-комната',
    'model:i-i-s-hotel-отель',
    'model:i-i-s-hotel-регистр-записи',
    'model:i-i-s-hotel-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
