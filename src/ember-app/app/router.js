import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-hotel-гости-l');
  this.route('i-i-s-hotel-гости-e',
  { path: 'i-i-s-hotel-гости-e/:id' });
  this.route('i-i-s-hotel-гости-e.new',
  { path: 'i-i-s-hotel-гости-e/new' });
  this.route('i-i-s-hotel-должность-l');
  this.route('i-i-s-hotel-должность-e',
  { path: 'i-i-s-hotel-должность-e/:id' });
  this.route('i-i-s-hotel-должность-e.new',
  { path: 'i-i-s-hotel-должность-e/new' });
  this.route('i-i-s-hotel-доступ-l');
  this.route('i-i-s-hotel-доступ-e',
  { path: 'i-i-s-hotel-доступ-e/:id' });
  this.route('i-i-s-hotel-доступ-e.new',
  { path: 'i-i-s-hotel-доступ-e/new' });
  this.route('i-i-s-hotel-запись-гостя-l');
  this.route('i-i-s-hotel-запись-гостя-e',
  { path: 'i-i-s-hotel-запись-гостя-e/:id' });
  this.route('i-i-s-hotel-запись-гостя-e.new',
  { path: 'i-i-s-hotel-запись-гостя-e/new' });
  this.route('i-i-s-hotel-комната-l');
  this.route('i-i-s-hotel-комната-e',
  { path: 'i-i-s-hotel-комната-e/:id' });
  this.route('i-i-s-hotel-комната-e.new',
  { path: 'i-i-s-hotel-комната-e/new' });
  this.route('i-i-s-hotel-отель-l');
  this.route('i-i-s-hotel-отель-e',
  { path: 'i-i-s-hotel-отель-e/:id' });
  this.route('i-i-s-hotel-отель-e.new',
  { path: 'i-i-s-hotel-отель-e/new' });
  this.route('i-i-s-hotel-сотрудник-l');
  this.route('i-i-s-hotel-сотрудник-e',
  { path: 'i-i-s-hotel-сотрудник-e/:id' });
  this.route('i-i-s-hotel-сотрудник-e.new',
  { path: 'i-i-s-hotel-сотрудник-e/new' });
});

export default Router;
