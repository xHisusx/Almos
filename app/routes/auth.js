import Route from '@ember/routing/route';


export default Route.extend({
  actions: {
    logIn: function() {
        let {login,password} = this.getProperties('login','password');
        console.log(login,password, "why null"); //TODO why  null
    }
  }
});
