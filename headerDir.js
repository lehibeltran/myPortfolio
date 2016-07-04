angular.module('myApp').directive('headerDir', function () {
    return {
        templateUrl: '../templates/header.html',
        restrict: 'E',
        link: function (scope, elem, attrs) {
            scope.setTheme = function (theme){
                var link = document.createElement( 'link' );
                link.setAttribute("id", "bootstrap");
                link.rel = 'stylesheet';
                if(theme === 'default'){
                    link.href = "https://bootswatch.com/bower_components/bootstrap/dist/css/bootstrap.min.css";
                }else{
                    link.href = "https://bootswatch.com/"+theme+"/bootstrap.min.css";
                }
                $('#bootstrap').remove();
                $('head').append(link);
            };
        }
    }
});
