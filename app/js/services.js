'use strict';

/* Services */

var librabyServices = angular.module('librabyServices', ['ngResource']);

librabyServices.factory('Books', ['$resource',
  function($resource){
    var data = $resource('library/:bookId.json', {}, {
      query: {method:'GET', params:{bookId:'library'}, isArray:true},
      update: {method:'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      remove: {method:'DELETE'}
    });
   return data;
  }]);
