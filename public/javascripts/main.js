requirejs.config({
    baseUrl: '/js',

    paths: {
        angular: '/lib/angular/angular',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
        bootstrap: '../bootstrap/js/bootstrap.min',
        login:'/lib/angular-login-component/login'
    },

    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        },
        login:{
            exports: 'angular-login'
        }
    }
});