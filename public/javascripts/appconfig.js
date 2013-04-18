'use strict';

define(['angular', 'app', 'appcontrollers'], function (angular, app) {
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            })
    }]);
});
