angular.module('myApp').directive('bodyDir', function(){
    return {
        templateUrl: '../views/body.html',
        restrict: 'E',
        link: function(scope, elem, attrs){
            // elem.bind('click', function(e) {
            //     scope.imageValue = $(this).find('img').attr('src');
            // });
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