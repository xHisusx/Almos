import Component from '@ember/component';

export default Component.extend({
  actions :{
    fuck() {
      alert("fuck u");
    }
  }
});
//
// actions : {
//   toggleSideBasket() {
//     $('.ui.sidebar').first()
//       .sidebar('toggle', '.side-bar-button.button')
//     ;
//     $('.side-bar-button.button')
//       .removeClass('disabled')
//   }
// }
