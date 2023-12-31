import {
  defineNamespace,
  defineProjections,
  Model as ДоступMixin
} from '../mixins/regenerated/models/i-i-s-hotel-доступ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДоступMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
