import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьГостяMixin
} from '../mixins/regenerated/models/i-i-s-hotel-запись-гостя';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьГостяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
