import Component from '@ember/component';

export default Component.extend({
  actions :{
    alert() {
      alert("Error.Your basket is empty.");
    }
  }
});
