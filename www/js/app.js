(function () {
  'use strict';
  angular
    .module('pokerApp', ['LocalStorageModule', 'xeditable'])
    .controller('PokerController', PokerController);

  function PokerController($scope, localStorageService) {
    var localPokerPoints = localStorageService.get('empList');
    var localPokerPlayer = localStorageService.get('empPlayer');
    $scope.empList = localPokerPoints || [];
    $scope.empPlayer = localPokerPlayer || [];
    // Watch for changes in the value of $scope.listTodo.
    // If someone adds or removes a todo,
    // it will then keep our local storage todos datastore in sync.
    $scope.$watch('empList', function () {
      localStorageService.set('empList', $scope.empList);
    }, true);

    $scope.$watch('empPlayer', function () {
      localStorageService.set('empPlayer', $scope.empPlayer);
    }, true);
    //Add points
    $scope.addemp = {};
    $scope.saveEmp = function(){
      $scope.empList.push($scope.addemp);
      $scope.resetpoint();
    };
    $scope.resetpoint = function() {
      $scope.addemp = {};
      $scope.form.$setPristine();
    }
    // //Display data
    // $scope.getTemplate = function (point) {
    //     if (point.point1 === $scope.addemp.point1) return 'edit';
    //     else return 'display';
    // };
    // //Edit point
    // $scope.editPoints = function (point) {
    //     $scope.selected = angular.copy(point);
    // };

    // Delete point
    $scope.deletePoint = function (id, index) {
      $scope.empList.splice(index, 1);
    }

    // Total point
    $scope.tinh = function() {
      var array1 = $scope.empList;
      $scope.sum1 = 0;
      array1.forEach(function(point) {
        $scope.sum1 += parseInt(point.point1);
      });

      $scope.sum2 = 0;
      array1.forEach(function(point) {
        $scope.sum2 += parseInt(point.point2);
      });

      $scope.sum3 = 0;
      array1.forEach(function(point) {
        $scope.sum3 += parseInt(point.point3);
      });

      $scope.sum4 = 0;
      array1.forEach(function(point) {
        $scope.sum4 += parseInt(point.point4);
      });
    };

    //Add player
    $scope.playeremp = {};
    $scope.playersEmp = function(){
      $scope.empPlayer.push($scope.playeremp);
      console.log($scope.empPlayer);
      $scope.resetplayer();
    };
    $scope.resetplayer = function() {
      $scope.playeremp = {};
      $scope.form.$setPristine();
    }

    // Delete point
    $scope.deletePlayer = function (id, index) {
      $scope.empPlayer.splice(index, 1);
    }
  };
})();