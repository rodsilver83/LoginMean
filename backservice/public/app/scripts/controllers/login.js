/**
 * Created by Rodrigo on 6/9/16.
 */
angular.module('LoginModule',[])
  .controller('LoginCtrl',function ($scope, $http) {
    $scope.user = {'username':'','password':''};

    $scope.doLogin = function(){
      $http.post('http://localhost:3000/login',$scope.user)
        .then(function(response){
          console.log("Response: ",response);
        });
    };
  });