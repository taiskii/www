'use strict';

/* Services */

var librabyServices = angular.module('librabyServices', ['ngResource']);

librabyServices.factory('Books', ['$resource',
  function($resource){
    var data = $resource('books/:bookId', {}, {
      query: {method:'GET', params:{bookId:''}, isArray:true},
	  create: {method:'POST', params:{bookId:''}},
      update: {method:'PUT'},//params:{bookId:$routeParams.bookId}},
      remove: {method:'DELETE'}//,params:{bookId:$routeParams.bookId}}
    });
   return data;
  }]);
