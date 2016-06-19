(function() {
    //debug variable
    var debug = true;
    //The main module
    var pcs = angular.module('wpPCS', ['ui.bootstrap', 'ngAnimate', 'ngStorage']);
    // pcs.run(function($rootScope, $templateCache) {
    //     $rootScope.$on('$viewContentLoaded', function() {
    //         $templateCache.removeAll();
    //     });
    // });
    if (debug) {
        console.log('Module wpPCS initiated');
    }

    var mainCtrl = pcs.controller('mainCtrl', ['$scope', '$log', '$http', '$localStorage', function($scope, $log, $http, $localStorage) {
        if (debug) {
            console.log('inside controller');
        }
        $scope.mainArr = [];
        $scope.pcsExport = function(){
          if(debug){
            console.log('Export button clicked!');
          }

          var pName = (typeof $scope.pName !== 'undefined' ? $scope.pName : 'Plugin Name');

          var final ='=== Plugin Name ===\n';
          final +='Contributors: (this should be a list of wordpress.org userids)';
          final +='Donate link: http://example.com/';
          final +='Tags: comments, spam';
          final +='Requires at least: 3.0.1';
          final +='Stable tag: 4.3';
          final +='License: GPLv2 or later';
          final +='License URI: http://www.gnu.org/licenses/gpl-2.0.html\n';
          final +='Here is a short description of the plugin.  This should be no more than 150 characters.  No markup here.';
           console.log(final);

           var fileName = pName.replace(new RegExp(' ', 'g'), '-').toLowerCase();//'Your-plugin-name';//$scope.pName.replace(' ','-');
           var link = document.createElement('a');

           link.setAttribute('download', fileName+'.php');
           link.setAttribute('href', 'data:' + 'text;data:attachment/php;charset=utf-8,' + encodeURIComponent(final));
           // window.open("text;data:attachment/php;charset=utf-8," + encodeURIComponent(elHtml));
           link.click();

        };


    }]);
})();
