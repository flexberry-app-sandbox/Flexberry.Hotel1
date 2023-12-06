import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.hotel.caption'),
          title: i18n.t('forms.application.sitemap.hotel.title'),
          children: [{
            link: 'i-i-s-hotel-комната-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-комната-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-hotel-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-сотрудник-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-hotel-должность-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-hotel-доступ-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-доступ-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-hotel-запись-гостя-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-запись-гостя-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-запись-гостя-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-hotel-гости-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-гости-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-гости-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-hotel-отель-l',
            caption: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-отель-l.caption'),
            title: i18n.t('forms.application.sitemap.hotel.i-i-s-hotel-отель-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})