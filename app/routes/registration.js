import Route from '@ember/routing/route';

let regInputs = [{
  title: 'имя',
}, {
  title: 'логин',
}, {
  title: 'email',
}, {
  title: 'пароль',
}, {
  title: 'повтор пароля',
}
]

export default Route.extend({
  model() {
    return regInputs
  }
});
