// import Route from '@ember/routing/route';
import Ember from 'ember';



export default Ember.Route.extend({



  actions: {
    error(error, transition) {
          if (error) {
              console.log('error404')
            }
          }
    }
});
