import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('catalog');
  this.route('search');
  this.route('download');
  this.route('home');
});

export default Router;
