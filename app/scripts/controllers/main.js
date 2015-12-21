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

    var myDataRef = new Firebase('https://tiktactoe.firebaseio.com/');
        $scope.a = [];
        $scope.currentPlayer = 'x';

        $scope.clickElement = function (pos) {

            var elem = $scope.a[pos];
            if (elem === undefined) {
                $scope.a[pos] = {
                    position: pos,
                    value: $scope.currentPlayer
                }
                myDataRef.push({game: 1, moves: $scope.a});
            }
            $scope.currentPlayer = $scope.currentPlayer == 'x' ? '0' : 'x';
        }

        $scope.reset= function () {
        $scope.a = [];
        $scope.currentPlayer = 'x';
        }

//          myDataRef.push({name: name, text: text});
//           myDataRef.on('child_added', function(snapshot) {
////  //We'll fill this in later.
//});


    });
