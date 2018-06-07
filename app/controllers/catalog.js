import Controller from '@ember/controller';


export default Controller.extend({
  items: [],
  actions: {
    addToBasket: function(){
        // var items = this.get('store').findAll('item');
        // console.log(items);
      },
      filterByName(param) {
        if (param !== '') {
          return this.get('store').query('item', {name: param})
        }
      },
      sortColumn(note) {
        // var val = $(event.target).attr("data-value");

        alert(note);
      },
      getBasketItem(param){
        if (param !== '') {
          var item = this.get('store').query('item', {name: param});
          //how to add item in items to use in side-basket
        }
    }
    }
});
