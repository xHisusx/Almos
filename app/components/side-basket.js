import Component from '@ember/component';

export default Component.extend({

  actions: {
    openModalDialog: function(){
      document.getElementById("modalDialog").style.display = "flex";

    },
    closeModalDialog: function(){
      document.getElementById("modalDialog").style.display = "none";
    },
    choosePlan: function() {
      //TODO ever choice
      document.getElementById("deliver-table").style.display = "none";
      document.getElementById("data-table").style.display = "flex";
    },
    createOrder: function() {
      document.getElementById("data-table").style.display = "none";
      document.getElementById("info-table").style.display = "flex";
    }
  }
});
