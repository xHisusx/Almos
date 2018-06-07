import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('catalog', function() {
    this.route('cart');
  });
  this.route('contact');
  this.route('download');
  this.route('home');
  this.route('404', { path: '/*path' });
  this.route('products');
  this.route('auth', function() {
    this.route('registration');
  });
  this.route('registration');

});

export default Router;
