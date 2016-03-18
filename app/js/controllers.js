'use strict';

/* Controllers */

var libraryControllers = angular.module('libraryControllers', []);

libraryControllers.controller('libraryListCtrl', ['$scope', 'Books',
  function($scope, Books) {
    $scope.library = Books.query();
    $scope.orderProp = 'name';
    $scope.doSort = function($argum){
      $scope.orderProp = $argum;
    };
    $scope.addBook =  function(){
      window.location.hash = '/addBook';
    };

      $scope.searchClick =  function(){
          var searchStr = $scope.query;
          var regexp = new RegExp(searchStr,'i');
          var query = Books.query();
          var $scope__ = new Array();
          query.$promise.then(function(data) {
              $scope.books = data;
              for (var i in $scope.books){
                    if (regexp.test($scope.books[i].name) || regexp.test($scope.books[i].snippet)  ||  regexp.test($scope.books[i].author) ){
                        $scope__.push($scope.books[i]);
                    }
              }
              $scope.books = $scope__;
              console.log($scope.books);
              console.log($scope__);
          });

      };

  }]);

libraryControllers.controller('libraryDetailCtrl', ['$scope', '$routeParams', 'Books',
  function($scope, $routeParams, Books) {

      var query = Books.query();
      query.$promise.then(function(data) {
          $scope.books = data;
          for (var i in $scope.books){
              if ($scope.books[i].id === $routeParams.bookId) {
                  $scope.book = $scope.books[i];
              }
          }
      });

  $scope.backHome =  function(){
    window.location.hash = '/library';
  };
  $scope.editBook = function($argum){
      window.location.hash = '/addBook/'+$argum;
  };

  $scope.delBook = function($argum){
      Books.remove({'id':$routeParams.bookId});
  };
  }]);


var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('mainController', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {

    $scope.uploadPic = function(file) {
        file.upload = Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: {
                    file: file
            },
        });
        file.upload.then(function (response) {
            $timeout(function () {
                file.result = response.data;
            });
        }, function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });

    }
}]);


var MyApp = angular.module('MyApp', ['fileUpload','libraryControllers']);

MyApp.controller('libraryAddBook',['$scope', '$routeParams', 'Books','Upload', '$timeout',function ($scope,$routeParams, Books, Upload, $timeout) {
    $scope.backHome =  function(){
        window.location.hash = '/library';
    };
    if (!$routeParams.bookId) {
        $scope.submitForm = function (name, author, date_published, snippet, ImageForm1) {
            if (name) {

                var query = Books.query();
                query.$promise.then(function (data) {
                    $scope.books = data;
                    var nu_id = $scope.books.length + 1;


                    var new_book = {
                        author: author,
                        date_published: date_published ? Date.parse(date_published) / 1000 : '',
                        id: ImageForm1 ? ImageForm1['name'].replace(/.jpg|.jpeg|.png|.gif/g, "") : nu_id,
                        imageUrl: ImageForm1 ? 'img/books/' + ImageForm1['name'] : 'img/books/noImg.jpg',
                        name: name,
                        snippet: snippet
                    }
                    Books.update(new_book, {});
                    window.location.hash = '/library';

                });
            }

        };
    }else{
        var query = Books.query();
        query.$promise.then(function(data) {
            $scope.books = data;
            for (var i in $scope.books){
                if ($scope.books[i].id === $routeParams.bookId) {
                    $scope.book = $scope.books[i];
                }
            }

            $scope.name = $scope.book.name;
            $scope.author = $scope.book.author;
            //$scope.date_published = $scope.date_published.filter('date');
            $scope.snippet = $scope.book.snippet;
            //$scope.ImageForm1 = $scope.book.ImageForm1;
            console.log($scope.book.date_published);
            console.log($scope);
            document.getElementById('SubmitButton').innerHTML = 'Редактировать';
            //$scope.SubmitButton.innerHTML = 'Редактировать';

        });
        $scope.submitForm = function (name, author, date_published, snippet, ImageForm1) {
            if (name) {

                var query = Books.query();
                query.$promise.then(function(data) {
                    $scope.books = data;
                    var new_book = {
                        author: author,
                        date_published: date_published ? Date.parse(date_published) / 1000 : '',
                        imageUrl: ImageForm1 ? 'img/books/' + ImageForm1['name'] : 'img/books/noImg.jpg',
                        name: name,
                        snippet: snippet
                    }

                    for (var i in $scope.books){
                        if ($scope.books[i].id === $routeParams.bookId) {
                            Books.update({id:$routeParams.bookId},new_book);
                        }
                    }
                    window.location.hash = '/library';

                });
            }

        };
    }
}]);