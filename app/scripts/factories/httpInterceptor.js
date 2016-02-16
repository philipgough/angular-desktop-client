/**
 * Redirect on error response status code
 */
'use strict';
angular.module('BetterBetting.pundit')

.factory('httpErrorResponseInterceptor', ['$q', '$location',
  function($q, $location) {
    return {
      response: function(responseData) {
        return responseData;
      },
      responseError: function error(response) {
        switch (response.status) {
          case 401:
            $location.path('/login');
            break;
          case 404:
            $location.path('/404');
            break;
          default:
            $location.path('/');
        }

        return $q.reject(response);
      }
    };
  }
]);