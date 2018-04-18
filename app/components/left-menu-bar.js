import Component from '@ember/component';

export default Component.extend({
  actions: {
    openSideMenu: function() {
      document.getElementById('side-menu').style.width = '300px';
      document.getElementById("dimmer").style.display = 'block';
    },
    closeSideMenu: function() {
      document.getElementById('side-menu').style.width = '0px';
      document.getElementById("dimmer").style.display = 'none';
    }
  }
});
