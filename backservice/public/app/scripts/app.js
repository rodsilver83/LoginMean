'use strict';

/**
 * @ngdoc overview
 * @name loginFormApp
 * @description
 * # loginFormApp
 *
 * Main module of the application.
 */
angular
  .module('loginFormApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'LoginModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
