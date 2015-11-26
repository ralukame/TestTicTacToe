'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.a = [

    ];

        $scope.currentPlayer = 'x';
        $scope.a00 = ' ';
        $scope.a01 = ' ';
        $scope.a02 = ' ';
        $scope.a10 = ' ';
        $scope.a11 = ' ';
        $scope.a12 = ' ';
        $scope.a20 = ' ';
        $scope.a21 = ' ';
        $scope.a22 = ' ';


        $scope.clickElement = function (pos) {
            $scope.a00 = ' x';
            var elem = $scope.a[pos];
            if (elem === undefined) {
                $scope.a[pos] = {
                    position: pos,
                    value: $scope.currentPlayer
                }
            }
            $scope.currentPlayer = $scope.currentPlayer == 'x' ? '0' : 'x';
        }



    });
