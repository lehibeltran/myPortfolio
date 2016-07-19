angular.module('myApp').directive('bodyDir', function(){
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
        },
    }
});