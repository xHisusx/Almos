import Ember from 'ember';


export default Ember.Component.extend({
selectedIndex : false,
  actions: {
    selected(idx){

      this.set('selectedIndex', idx);
    },
    handleItem(param) {
      let handledItem = this.get('gotItem');
      handledItem(param);
      // handledItem(param).then((filterResult) => this.set('result',filterResult));
    }
  }
});
