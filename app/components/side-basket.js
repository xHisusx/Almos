import Component from '@ember/component';

var chosenPlan;

export default Component.extend({
  


  actions: {
    openModalDialog: function(){
      document.getElementById("modalDialog").style.display = "flex";

    },
    closeModalDialog: function(){
      document.getElementById("modalDialog").style.display = "none";
    },
    choosePlan: function() {
      var e = window.event,
        btn = e.target || e.srcElement;
        chosenPlan = btn.id;
        // alert(btn.id); TODO form email model (incl: orderArr, chosenPlan, userData)
      document.getElementById("content-table").style.display = "none";
      document.getElementById("data-table").style.display = "flex";

      return chosenPlan;
    },
    sendData: function() {
      let {name, email} = this.getProperties('name','email');

      document.getElementById("data-table").style.display = "none";
      document.getElementById("info-table").style.display = "flex";

      console.log(name, email, chosenPlan);
    }
  }
});
