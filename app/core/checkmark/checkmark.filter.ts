angular.module('core').filter('checkmark', () => {
  return input => {
    return input ? '\u2713' : '\u2718';
  };
});
