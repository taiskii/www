'use strict';

/* App Module */

var libraryApp = angular.module('libraryApp', [
  'ngRoute',
  'libraryAnimations',
  'fileUpload',
  'MyApp',
  'libraryControllers',
  'librabyServices'
]);

libraryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/library', {
        templateUrl: 'partials/libtay-list.html',
        controller: 'libraryListCtrl'
      }).
      when('/library/:bookId', {
        templateUrl: 'partials/book-detail.html',
        controller: 'libraryDetailCtrl'
      }).
      when('/addBook', {
        templateUrl: 'partials/addBook.html',
        controller: 'libraryAddBook'
      }).
      when('/addBook/:bookId', {
        templateUrl: 'partials/addBook.html',
        controller: 'libraryAddBook'
      }).
      otherwise({
        redirectTo: '/library'
      });
  }]);
