'use strict';

/* Filters */

angular.module('booksFilters', [])
    .filter('filterEx', function() {
      var find = function(arr,name) {
        for(var i=0; i<arr.length; i++)
          if (arr[i].name==name) return arr[i].list;
      };
      return function(items,tablehead,str) {
        if (!str) return items;
        var result = [], list, ok, regexp = new RegExp(str,'i');
        for (var i in items) {
          ok = false;
          for (var k in items[i])
            if (items[i].hasOwnProperty(k) && k[0]!='$') {
              list = find(tablehead,k);
              if (list && regexp.test(list[items[i][k]])
                  || regexp.test(items[i][k])) {ok = true; break;}
            }
          if (ok) result.push(items[i]);
        }
        return result;
      };
});
