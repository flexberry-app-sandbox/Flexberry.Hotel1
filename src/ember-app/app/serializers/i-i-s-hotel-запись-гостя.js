import { Serializer as ЗаписьГостяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-запись-гостя';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьГостяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
