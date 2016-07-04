angular.module('myApp', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('home', {
            url: "/",
            templateUrl: "templates/home.html"
            })
            .state('portfolio', {
                url: "/profile",
                templateUrl: "templates/profile.html"
            });
        $urlRouterProvider.otherwise("/");
    });