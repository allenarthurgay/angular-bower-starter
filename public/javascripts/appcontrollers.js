'use strict';

define(['angular', 'app', 'controllers/login'], function (angular, app, LoginCtrl) {
    var appControllers = {
        controllers :{
            LoginCtrl: LoginCtrl
        }
    };
    app.controller(appControllers.controllers);
});
