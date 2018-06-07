import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('string'),
  quantity: DS.attr('string'),
  cost: DS.attr('string'),
  info: DS.attr('string'),
});
