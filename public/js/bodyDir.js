angular.module('myApp').directive('bodyDir', function($window){
    return {
        templateUrl: '../views/body.html',
        restrict: 'E',
        link: function(scope, elem, attrs){
            scope.closing = function(){
                scope.imageValue = "";
                scope.modalTitle = "";
            };
            scope.loadModal = function(src, title) {
                scope.imageValue = src;
                scope.modalTitle = title;
            };
            scope.scApp = function(){
                $window.location.href = "http://socialapp.lehibeltran.com";
            };
            scope.QzApp = function(){
                $window.location.href = "http://quizapp.lehibeltran.com";
            };
            scope.EcommerceApp = function(){
                $window.location.href = "http://myecommerce.lehibeltran.com";
            };
        },
    }
});