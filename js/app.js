angular.module('myApp', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('home', {
            url: "/",
            templateUrl: "../views/home.html"
            });
        $urlRouterProvider.otherwise("/");
    });