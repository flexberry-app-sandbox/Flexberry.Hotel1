import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьГостяMixin
} from '../mixins/regenerated/models/i-i-s-hotel-запись-гостя';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьГостяMixin, Validations, {
});

defineProjections(Model);

export default Model;
