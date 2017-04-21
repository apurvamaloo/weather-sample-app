angular.module('testingAngularApp')
.controller('testingAngularCtrl',["angularService1","$http","$scope",function(angularService1,$http,$scope){
  $scope.title="Hello World";

  var response=angularService1.getData().then(function(data){
    console.log("data",data.data);
      $scope.data=data.data;
  },function(err){
    console.log("error");
  })


}])
