var app = angular.module('app',[]);
app.controller('appctrl',function($scope,$http){
   $http.get('data/b.json').then(function(r){
   	$scope.pros =r.data;
   });
   $scope.show = function(view){
   	$('#modal-id').modal('show');
   	$scope.infor = show;
   }
});